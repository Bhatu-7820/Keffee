import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/businessData';

const NAV_LINKS = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Menu',       href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Booking',    href: '#booking' },
  { label: 'Location',   href: '#location' },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navBase = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
  };
  const navSolid = {
    background: 'var(--offwhite)',
    borderBottom: '1px solid var(--border)',
    boxShadow: '0 2px 20px rgba(36,22,15,0.06)',
  };
  const navTransparent = {
    background: 'transparent',
    borderBottom: '1px solid rgba(255,255,255,0)',
  };

  const linkColor = solid ? 'var(--muted)' : 'rgba(255,249,241,0.85)';
  const brandColor = solid ? 'var(--espresso)' : '#fff';

  return (
    <>
      <header style={{ ...navBase, ...(solid ? navSolid : navTransparent) }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          
          {/* Brand Logo */}
          <a href="#hero" style={{ textDecoration: 'none', lineHeight: 1.1 }}>
            <div style={{
              fontFamily: 'var(--serif)', fontWeight: 400, fontSize: '1.25rem',
              color: brandColor, letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'color 0.3s',
            }}>
              KAFFA
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.22em',
              textTransform: 'uppercase', color: solid ? 'var(--caramel)' : 'rgba(255,255,255,0.7)',
              fontWeight: 600, transition: 'color 0.3s', marginTop: 1
            }}>
              Coffee Roaster
            </div>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="nav-desktop">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} style={{
                fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: linkColor, textDecoration: 'none',
                transition: 'color 0.22s',
              }}
              onMouseEnter={e => e.target.style.color = solid ? 'var(--espresso)' : '#fff'}
              onMouseLeave={e => e.target.style.color = linkColor}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="nav-desktop">
            <a href="#booking"
              className={`btn ${solid ? 'btn-dark' : 'btn-ghost-light'}`}
              style={{ padding: '10px 24px', fontSize: '0.7rem' }}>
              BOOK A TABLE
            </a>
          </div>

          {/* Hamburger Toggle */}
          <button onClick={() => setOpen(!open)} className="nav-mobile"
            aria-label="Toggle menu"
            style={{ width: 36, height: 36, display: 'none', flexDirection: 'column', justifyContent: 'center', gap: 6, padding: 4 }}>
            <span style={{
              display: 'block', width: '100%', height: 1.5,
              background: solid ? 'var(--espresso)' : '#fff',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: open ? 'rotate(45deg) translateY(5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '100%', height: 1.5,
              background: solid ? 'var(--espresso)' : '#fff',
              transition: 'opacity 0.3s',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '100%', height: 1.5,
              background: solid ? 'var(--espresso)' : '#fff',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: open ? 'rotate(-45deg) translateY(-5px)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 199,
        background: 'var(--espresso)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        gap: '1.5rem',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'opacity 0.4s var(--ease)',
      }}>
        {NAV_LINKS.map((l, i) => (
          <a key={l.label} href={l.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 300, color: 'var(--cream)', textDecoration: 'none',
              letterSpacing: '0.05em',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${0.04 * i + 0.1}s, transform 0.4s ease ${0.04 * i + 0.1}s`,
            }}>
            {l.label}
          </a>
        ))}
        <div style={{
          marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
          opacity: open ? 1 : 0, transition: 'opacity 0.4s ease 0.4s',
        }}>
          <a href="#booking" onClick={() => setOpen(false)}
            className="btn btn-caramel" style={{ padding: '12px 36px' }}>
            BOOK A TABLE
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
