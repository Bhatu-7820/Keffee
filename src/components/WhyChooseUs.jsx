import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PILLARS = [
  { num: '01', title: 'Good Coffee', body: 'Every cup starts with freshly roasted beans prepared with care and skill.' },
  { num: '02', title: 'Good Food',   body: 'Quality ingredients, thoughtfully prepared snacks and bites to complement your coffee.' },
  { num: '03', title: 'Good Space',  body: 'A warm, inviting environment designed to help you pause, breathe, and be present.' },
  { num: '04', title: 'Good Moments', body: 'Great company, great conversations, and great coffee — that is the KAFFA promise.' },
];

export default function Experience() {
  const ref = useScrollReveal();
  return (
    <section id="experience" ref={ref} className="section" style={{ background: 'var(--espresso)' }}>
      <div className="wrap">

        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          {/* Header */}
          <div style={{ maxWidth: 560 }}>
            <span className="label sr" style={{ color: 'var(--caramel)' }}>03 / THE EXPERIENCE</span>
            <div className="rule sr sr-delay-1" />
            <h2 className="heading sr sr-delay-2" style={{ color: 'var(--cream)' }}>
              Come for the coffee.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(245,235,221,0.65)' }}>Stay for the feeling.</em>
            </h2>
          </div>

          {/* Pillars grid */}
          <div className="exp-grid">
            {PILLARS.map((p, i) => (
              <div key={p.num} className={`sr sr-delay-${i + 1}`} style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: 28,
              }}>
                <span style={{
                  fontFamily: 'var(--sans)', fontSize: '0.7rem', color: 'var(--caramel)',
                  letterSpacing: '0.18em', display: 'block', marginBottom: 14,
                }}>
                  {p.num}
                </span>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 400,
                  color: 'var(--cream)', marginBottom: 12,
                }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(245,235,221,0.6)' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .exp-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </section>
  );
}
