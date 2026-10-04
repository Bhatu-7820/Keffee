import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

// Final CTA section — café-style, full-bleed dark, no form
export default function ContactSection() {
  const ref = useScrollReveal();
  return (
    <section id="contact" ref={ref} style={{
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
    }}>
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden' }}>
        <img
          src="/images/latte-art.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: -1,
        background: 'rgba(36,22,15,0.86)',
      }} />

      {/* Content */}
      <div className="wrap" style={{ paddingTop: 'var(--sec-v)', paddingBottom: 'var(--sec-v)', textAlign: 'center' }}>
        <span className="label sr" style={{ color: 'var(--caramel)', marginBottom: 18, display: 'block' }}>
          Come by for a cup
        </span>
        <div className="rule sr sr-delay-1" style={{ margin: '0 auto 28px' }} />
        <h2 className="display-sm sr sr-delay-2" style={{ color: 'var(--cream)', marginBottom: 16, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
          You deserve a<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>great cup of coffee.</em>
        </h2>
        <p className="sr sr-delay-3" style={{
          fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.75,
          color: 'rgba(245,235,221,0.65)',
          maxWidth: 420, margin: '0 auto 40px',
        }}>
          {BUSINESS_INFO.name}<br />
          Open daily. Always fresh.
        </p>

        <div className="sr sr-delay-4" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer"
            className="btn btn-caramel btn-lg">
            <MapPin size={15} /> Visit Us
          </a>
          <a href={`tel:${BUSINESS_INFO.phone}`}
            className="btn btn-ghost-light btn-lg">
            <Phone size={15} /> {BUSINESS_INFO.formattedPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
