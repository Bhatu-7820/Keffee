import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Full-width dramatic image with a single line of text
export default function FullWidthBanner() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} style={{
      position: 'relative',
      height: 'clamp(300px, 40vw, 520px)',
      overflow: 'hidden',
      isolation: 'isolate',
    }}>
      <div className="img-wrap" style={{ position: 'absolute', inset: 0, borderRadius: 0, zIndex: -2 }}>
        <img
          src="/images/fullwidth-banner.jpg"
          alt="KAFFA Coffee — crafted with passion"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%' }}
        />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: -1,
        background: 'rgba(36,22,15,0.52)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px',
      }}>
        <span className="label sr" style={{ color: 'var(--caramel)', marginBottom: 18 }}>Roasted with care</span>
        <p className="sr sr-delay-1" style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
          fontWeight: 300, fontStyle: 'italic',
          color: 'var(--cream)', lineHeight: 1.3, maxWidth: 640,
          letterSpacing: '0.02em',
        }}>
          "Every cup is a little act of love."
        </p>
      </div>
    </section>
  );
}
