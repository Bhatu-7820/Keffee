import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function Menu() {
  const [active, setActive] = useState('all');
  const ref = useScrollReveal();

  const items = active === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === active);

  return (
    <section id="menu" ref={ref} className="section" style={{ background: 'var(--cream)' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="label sr">What we brew</span>
          <div className="rule sr sr-delay-1" />
          <h2 className="heading sr sr-delay-2">Our Menu</h2>
          <p className="body-text sr sr-delay-3" style={{ marginTop: 14 }}>
            Freshly prepared with quality ingredients. Prices and items are editable placeholders — visit us for today's selections.
          </p>
        </div>

        {/* Category filters */}
        <div className="sr sr-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 48 }}>
          {MENU_CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '9px 22px', border: '1px solid',
              borderColor: active === c.id ? 'var(--espresso)' : 'var(--border)',
              background: active === c.id ? 'var(--espresso)' : 'transparent',
              color: active === c.id ? 'var(--cream)' : 'var(--muted)',
              cursor: 'pointer', transition: 'all 0.25s ease',
            }}>
              {c.name}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="menu-grid">
          {items.map((item, i) => (
            <MenuItem key={item.id} item={item} delay={i} />
          ))}
        </div>

      </div>

      <style>{`
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        @media (max-width: 560px) {
          .menu-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  );
}

function MenuItem({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--espresso)' : 'var(--offwhite)',
        border: '1px solid var(--border)',
        transition: 'background 0.35s ease, border-color 0.35s ease',
        cursor: 'default',
      }}
    >
      {/* Image */}
      <div style={{ height: 200, overflow: 'hidden' }}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.6s var(--ease-out)',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
      </div>
      {/* Body */}
      <div style={{ padding: '22px 24px 24px' }}>
        {item.badge && (
          <span style={{
            fontFamily: 'var(--sans)', fontSize: '0.62rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--caramel)',
            display: 'block', marginBottom: 8,
            transition: 'color 0.3s',
          }}>
            {item.badge}
          </span>
        )}
        <h3 style={{
          fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400,
          color: hovered ? 'var(--cream)' : 'var(--espresso)',
          marginBottom: 8, lineHeight: 1.3,
          transition: 'color 0.3s',
        }}>
          {item.name}
        </h3>
        <p style={{
          fontFamily: 'var(--sans)', fontSize: '0.83rem', lineHeight: 1.65,
          color: hovered ? 'rgba(245,235,221,0.65)' : 'var(--muted)',
          marginBottom: 16,
          transition: 'color 0.3s',
        }}>
          {item.description}
        </p>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: `1px solid ${hovered ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`,
          paddingTop: 14, transition: 'border-color 0.3s',
        }}>
          <span style={{
            fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 500,
            color: hovered ? 'var(--caramel)' : 'var(--brown)',
            transition: 'color 0.3s',
          }}>
            {item.price}
          </span>
          <a href="#contact" style={{
            fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: hovered ? 'rgba(245,235,221,0.6)' : 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}>
            Enquire →
          </a>
        </div>
      </div>
    </div>
  );
}
