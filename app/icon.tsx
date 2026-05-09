import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A1F44',
          color: '#FFFFFF',
          fontSize: 44,
          fontWeight: 700,
          letterSpacing: '-0.04em',
          borderRadius: 12,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        Z
      </div>
    ),
    { ...size }
  );
}
