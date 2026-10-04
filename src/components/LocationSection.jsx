import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function LocationSection() {
  const ref = useScrollReveal();
  return (
    <section id="location" ref={ref} className="section" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="loc-grid">

          {/* Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="label sr">Find Us</span>
            <div className="rule sr sr-delay-1" />
            <h2 className="heading sr sr-delay-2" style={{ marginBottom: 24 }}>
              Come visit<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--brown)' }}>KAFFA</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              <InfoRow icon={MapPin} className="sr sr-delay-3">
                <strong style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: 'var(--espresso)', marginBottom: 3 }}>Location</strong>
                <span>{BUSINESS_INFO.locationNotice}</span>
              </InfoRow>
              <InfoRow icon={Clock} className="sr sr-delay-3">
                <strong style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: 'var(--espresso)', marginBottom: 3 }}>Hours</strong>
                <span>{BUSINESS_INFO.hours}</span>
              </InfoRow>
              <InfoRow icon={Phone} className="sr sr-delay-4">
                <strong style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: 'var(--espresso)', marginBottom: 3 }}>Phone</strong>
                <a href={`tel:${BUSINESS_INFO.phone}`} style={{ color: 'var(--brown)', fontWeight: 600, textDecoration: 'none' }}>
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </InfoRow>
            </div>

            <div className="sr sr-delay-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="btn btn-dark">
                <Navigation size={14} /> Get Directions
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-ghost">
                <Phone size={14} /> Call Us
              </a>
            </div>
          </div>

          {/* Map visual */}
          <div className="sr sr-delay-2 img-wrap loc-img" style={{ height: 'clamp(320px, 40vw, 500px)', background: 'var(--espresso)', position: 'relative' }}>
            <img src="/images/pourover-barista.jpg" alt="Visit KAFFA" style={{ filter: 'brightness(0.5)' }} />
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 20, textAlign: 'center', padding: 32,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'var(--caramel)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MapPin size={24} color="#fff" />
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 300,
                  color: 'var(--cream)', marginBottom: 16, fontStyle: 'italic',
                }}>
                  Open Google Maps for turn-by-turn directions
                </p>
                <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="btn btn-caramel">
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .loc-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }
        @media (max-width: 860px) {
          .loc-grid { grid-template-columns: 1fr; }
          .loc-img { order: -1; }
        }
      `}</style>
    </section>
  );
}

function InfoRow({ icon: Icon, children, className }) {
  return (
    <div className={className} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{
        width: 36, height: 36, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(184,121,74,0.1)',
      }}>
        <Icon size={16} color="var(--caramel)" />
      </div>
      <div className="body-sm">{children}</div>
    </div>
  );
}
