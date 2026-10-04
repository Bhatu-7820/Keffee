import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GALLERY_ITEMS } from '../data/galleryData';
import ImageModal from './ImageModal';

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const ref = useScrollReveal();

  return (
    <section id="gallery" ref={ref} className="section" style={{ background: 'var(--offwhite)' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="label sr">Visual Stories</span>
          <div className="rule sr sr-delay-1" />
          <h2 className="heading sr sr-delay-2">The KAFFA Gallery</h2>
          <p className="body-text sr sr-delay-3" style={{ marginTop: 14 }}>
            Roasting, brewing, and the moments that make our café feel like home.
          </p>
        </div>

        {/* Asymmetric editorial gallery grid */}
        <div className="gallery-grid sr sr-delay-2">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className={`gallery-item gallery-item-${i}`}
              style={{ cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.6s var(--ease-out)',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'scale(1.06)';
                  e.target.nextSibling.style.opacity = '1';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'scale(1)';
                  e.target.nextSibling.style.opacity = '0';
                }}
              />
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'rgba(36,22,15,0.55)',
                opacity: 0, transition: 'opacity 0.35s ease',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '20px 22px',
              }}>
                <span style={{
                  fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 600,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--caramel)', marginBottom: 6,
                }}>
                  {item.category}
                </span>
                <h4 style={{
                  fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 400,
                  color: 'var(--cream)', lineHeight: 1.3,
                }}>
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ImageModal item={selected} onClose={() => setSelected(null)} />

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 260px 320px;
          gap: 10px;
        }
        .gallery-item { background: var(--cream); }
        /* Span first item tall */
        .gallery-item-0 { grid-row: span 2; }
        /* Last item wide */
        .gallery-item-4 { grid-column: span 2; }

        @media (max-width: 860px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .gallery-item { height: 220px !important; }
          .gallery-item-0 { grid-row: span 1; }
          .gallery-item-4 { grid-column: span 1; }
        }
        @media (max-width: 520px) {
          .gallery-grid { grid-template-columns: 1fr; gap: 8px; }
          .gallery-item { height: 240px !important; }
        }
      `}</style>
    </section>
  );
}
