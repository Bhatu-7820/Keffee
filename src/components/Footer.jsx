import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Menu',     href: '#menu' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--espresso)', color: 'var(--cream)' }}>
      {/* Main footer body */}
      <div className="wrap" style={{ padding: 'clamp(56px, 8vw, 96px) clamp(20px, 5vw, 48px)' }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <a href="#hero" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 400,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream)',
              }}>
                Kaffa
              </div>
              <div style={{
                fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--caramel)', fontWeight: 500, marginTop: 2,
              }}>
                Coffee Roaster
              </div>
            </a>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: '0.85rem', lineHeight: 1.75,
              color: 'rgba(245,235,221,0.5)', maxWidth: 280,
            }}>
              A premium specialty coffee roaster dedicated to quality beans, warm hospitality, and genuine café moments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'var(--sans)', fontSize: '0.7rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--caramel)', marginBottom: 20,
            }}>
              Navigation
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV_LINKS.map(l => (
                <a key={l.label} href={l.href} style={{
                  fontFamily: 'var(--sans)', fontSize: '0.875rem',
                  color: 'rgba(245,235,221,0.55)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--cream)'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,235,221,0.55)'}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--sans)', fontSize: '0.7rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--caramel)', marginBottom: 20,
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={`tel:${BUSINESS_INFO.phone}`} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(245,235,221,0.55)', textDecoration: 'none',
                fontFamily: 'var(--sans)', fontSize: '0.875rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,235,221,0.55)'}>
                <Phone size={14} color="var(--caramel)" /> {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(245,235,221,0.55)', textDecoration: 'none',
                fontFamily: 'var(--sans)', fontSize: '0.875rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,235,221,0.55)'}>
                <MapPin size={14} color="var(--caramel)" /> View on Google Maps
              </a>
              <div style={{
                fontFamily: 'var(--sans)', fontSize: '0.83rem',
                color: 'rgba(245,235,221,0.4)', lineHeight: 1.6, marginTop: 4,
              }}>
                {BUSINESS_INFO.hours}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="wrap" style={{ padding: '18px clamp(20px, 5vw, 48px)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'rgba(245,235,221,0.3)' }}>
            © {year} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'rgba(245,235,221,0.3)' }}>
            Premium Specialty Coffee & Café
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.2fr;
          gap: clamp(32px, 5vw, 64px);
        }
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
