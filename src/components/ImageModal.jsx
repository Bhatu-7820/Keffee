import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function ImageModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const fn = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', fn); document.body.style.overflow = ''; };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 300,
      background: 'rgba(36,22,15,0.92)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
      animation: 'fadein 0.25s ease',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--offwhite)',
        maxWidth: 900, width: '100%',
        boxShadow: '0 40px 80px rgba(0,0,0,0.35)',
        position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: -16, right: -16, zIndex: 10,
          width: 40, height: 40, borderRadius: '50%',
          background: 'var(--espresso)', color: 'var(--cream)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: 'none', cursor: 'pointer', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--caramel)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--espresso)'}
        aria-label="Close">
          <X size={16} />
        </button>

        <div style={{ maxHeight: '68vh', overflow: 'hidden', background: '#000' }}>
          <img src={item.image} alt={item.title} style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain', display: 'block' }} />
        </div>
        <div style={{ padding: '20px 28px', borderTop: '1px solid var(--border)' }}>
          <span className="label" style={{ marginBottom: 4 }}>{item.category}</span>
          <h3 className="heading-sm" style={{ marginBottom: 6 }}>{item.title}</h3>
          <p className="body-sm">{item.caption}</p>
        </div>
      </div>
      <style>{`@keyframes fadein { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}
