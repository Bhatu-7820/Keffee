import React, { useEffect, useRef } from 'react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Hero() {
  const imgRef = useRef(null);

  // Subtle slow zoom on hero image
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let start = null;
    const DURATION = 8000;
    function tick(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / DURATION, 1);
      img.style.transform = `scale(${1 + p * 0.06})`;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      isolation: 'isolate',
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="/images/hero.jpg"
          alt="KAFFA Coffee Roasters Cafe"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transformOrigin: 'center center' }}
        />
      </div>
      {/* Gradient overlay — bottom-heavy for legibility */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: -1,
        background: 'linear-gradient(to top, rgba(36,22,15,0.92) 0%, rgba(36,22,15,0.55) 45%, rgba(36,22,15,0.18) 100%)',
      }} />

      {/* Content — sits at bottom */}
      <div className="wrap" style={{ paddingBottom: 'clamp(60px, 9vw, 100px)', paddingTop: 120, width: '100%' }}>
        <div style={{ maxWidth: 680 }}>

          <span className="label" style={{
            color: 'var(--caramel)', marginBottom: 20,
            opacity: 0, animation: 'heroIn 0.9s 0.3s var(--ease-out) forwards',
          }}>
            KAFFA COFFEE ROASTER
          </span>

          <h1 className="display" style={{
            color: '#fff', marginBottom: 24, maxWidth: 580,
            opacity: 0, animation: 'heroIn 0.9s 0.5s var(--ease-out) forwards',
          }}>
            GOOD COFFEE.<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>GOOD MOMENTS.</em>
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', lineHeight: 1.8,
            color: 'rgba(255,249,241,0.72)', marginBottom: 40,
            maxWidth: 480,
            opacity: 0, animation: 'heroIn 0.9s 0.7s var(--ease-out) forwards',
          }}>
            {BUSINESS_INFO.heroSubheading}
          </p>

          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            opacity: 0, animation: 'heroIn 0.9s 0.9s var(--ease-out) forwards',
          }}>
            <a href="#booking" className="btn btn-caramel">BOOK A TABLE</a>
            <a href="#menu" className="btn btn-ghost-light">EXPLORE MENU</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, right: 'clamp(20px, 5vw, 48px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: 0, animation: 'heroIn 0.9s 1.2s var(--ease-out) forwards',
      }}>
        <span style={{
          writingMode: 'vertical-lr', fontSize: '0.65rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
        }}>SCROLL ↓</span>
        <div style={{
          width: 1, height: 48, background: 'rgba(255,255,255,0.25)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%',
            background: 'var(--caramel)',
            animation: 'scrollLine 1.8s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%   { height: 0; top: 0; }
          50%  { height: 100%; top: 0; }
          100% { height: 0; top: 100%; }
        }
        @media (max-width: 600px) {
          #hero { align-items: flex-end; }
        }
      `}</style>
    </section>
  );
}
