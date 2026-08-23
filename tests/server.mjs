// Boots `next start` once for the whole test run and tears it down after.
//
// Tests exercise the real server rather than mocked handlers because every
// behaviour under test is an HTTP-level contract — status codes, Content-Type,
// Vary, and content negotiation — and those are exactly what a mock would fake.

import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

// fileURLToPath, not URL.pathname — the project path contains a space, and on
// Windows pathname yields "/E:/Past%20clients/...", which spawn cannot cd into.
const PROJECT_ROOT = fileURLToPath(new URL('..', import.meta.url));

export const PORT = Number(process.env.TEST_PORT ?? 3123);
export const BASE = `http://127.0.0.1:${PORT}`;

let child = null;

async function isUp() {
  try {
    const response = await fetch(`${BASE}/llms.txt`, {
      signal: AbortSignal.timeout(2000),
    });
    return response.status === 200;
  } catch {
    return false;
  }
}

export async function startServer() {
  if (await isUp()) return; // Reuse an already-running instance.

  // Spawned without a shell and via the next binary directly: with shell:true on
  // Windows, child.kill() terminates cmd.exe and leaves `next start` orphaned,
  // which keeps the test runner alive forever.
  child = spawn(
    process.execPath,
    [fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url)), 'start', '-p', String(PORT)],
    {
      cwd: PROJECT_ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'production' },
    },
  );

  let stderr = '';
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });

  const deadline = Date.now() + 90_000;
  while (Date.now() < deadline) {
    if (await isUp()) return;
    if (child.exitCode !== null) {
      throw new Error(`next start exited with ${child.exitCode}\n${stderr}`);
    }
    await sleep(500);
  }

  throw new Error(`Server did not become ready within 90s.\n${stderr}`);
}

export async function stopServer() {
  if (!child) return;
  const exited = new Promise((resolve) => child.once('exit', resolve));
  child.kill();
  // Piped stdio keeps the event loop referenced after exit; drop it explicitly
  // so `npm test` returns to the shell instead of hanging.
  child.stdout?.destroy();
  child.stderr?.destroy();
  await Promise.race([exited, sleep(3000)]);
  child = null;
}

/** Fetch without following redirects, so status assertions mean what they say. */
export function get(path, init = {}) {
  return fetch(`${BASE}${path}`, { redirect: 'manual', ...init });
}

/** POST a JSON-RPC message to the MCP endpoint. */
export function mcp(body, headers = {}) {
  return fetch(`${BASE}/api/mcp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream',
      ...headers,
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

/** Strip tags and collapse whitespace, to measure real visible content length. */
export function textContent(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Vary is case-insensitive and comma-delimited. */
export function varyIncludes(response, token) {
  const vary = response.headers.get('vary');
  if (!vary) return false;
  return vary
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .includes(token.toLowerCase());
}
