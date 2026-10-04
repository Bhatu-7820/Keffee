import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BUSINESS_INFO } from '../data/businessData';

export default function About() {
  const ref = useScrollReveal();
  return (
    <section id="about" ref={ref} className="section" style={{ background: 'var(--offwhite)' }}>
      <div className="wrap">
        <div className="about-grid">
          
          {/* Left — image */}
          <div className="sr img-wrap about-img" style={{ borderRadius: 0, height: 'clamp(360px, 50vw, 600px)' }}>
            <img src="/images/about-roaster.jpg" alt="Coffee roasting at KAFFA" />
          </div>

          {/* Right — editorial copy */}
          <div className="about-copy" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="label sr sr-delay-1">Our Story</span>
            <div className="rule sr sr-delay-1" />

            <h2 className="display-sm sr sr-delay-2" style={{ marginBottom: 24 }}>
              More than coffee.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--brown)' }}>A place to slow down.</em>
            </h2>

            {BUSINESS_INFO.aboutText.map((p, i) => (
              <p key={i} className={`body-text sr sr-delay-${i + 3}`} style={{ marginBottom: 16 }}>{p}</p>
            ))}

            <div className="sr sr-delay-4" style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <a href="#menu" className="btn btn-dark">Explore Menu</a>
              <a href="#contact" className="btn btn-ghost">Get In Touch</a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-img { order: -1; }
          .about-copy { padding-top: 0; }
        }
      `}</style>
    </section>
  );
}
