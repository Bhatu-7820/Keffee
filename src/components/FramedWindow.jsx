import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FramedWindow() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section" style={{ background: 'var(--offwhite)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        {/* Modern Window/Frame Container */}
        <div className="sr" style={{
          border: '1.5px solid var(--espresso)',
          padding: 'clamp(20px, 4vw, 40px)',
          background: 'var(--cream)',
          position: 'relative',
          maxWidth: 1000,
          margin: '0 auto',
          boxShadow: '0 16px 40px rgba(36,22,15,0.06)'
        }}>
          {/* Header Bar of the Window Frame */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifySpace: 'space-between',
            borderBottom: '1px solid var(--border)',
            paddingBottom: 16,
            marginBottom: 24
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--caramel)' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--brown)', opacity: 0.5 }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--espresso)', opacity: 0.3 }} />
            </div>
            <span className="label" style={{ fontSize: '0.65rem', letterSpacing: '0.25em' }}>
              KAFFA COFFEE ROASTER — EST. SURAT
            </span>
            <span className="body-sm" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--caramel)' }}>
              SPECIALTY GRADE
            </span>
          </div>

          {/* Window Body Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
            alignItems: 'center'
          }}>
            <div className="img-wrap" style={{ height: 320, border: '1px solid var(--border)' }}>
              <img
                src="/images/pourover-barista.jpg"
                alt="Framed Barista Pour"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="label" style={{ marginBottom: 8 }}>02 / THE ART OF ROASTING</span>
              <h3 className="heading" style={{ marginBottom: 14 }}>
                "Coffee worth slowing down for."
              </h3>
              <p className="body-text" style={{ marginBottom: 24 }}>
                At KAFFA, every batch is precision-roasted to accentuate its intrinsic origin notes — from rich chocolate undertones to floral citrus top notes.
              </p>
              <a href="#menu" className="btn btn-dark">
                EXPLORE MENU →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
