import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Zain Azhar — Reverse Recruiter for Career Coaches';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#FFFFFF',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: '#0A1F44',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            Z
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#0A1F44',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Zain Azhar
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 20,
              color: '#5B6473',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontWeight: 500,
            }}
          >
            Reverse Recruiting Partner
          </div>
          <div
            style={{
              fontSize: 76,
              color: '#0A1F44',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Reverse Recruiter for Career Coaches
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#5B6473',
              lineHeight: 1.4,
              maxWidth: 980,
            }}
          >
            300+ clients. 400+ interviews. United States, United Kingdom, Canada.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #E5E7EB',
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 22, color: '#0A1F44', fontWeight: 500 }}>
            zainazhar.vercel.app
          </div>
          <div style={{ fontSize: 20, color: '#8A93A4' }}>
            Job Search Execution Partner
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
