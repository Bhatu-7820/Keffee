import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

const TABLES = [
  { id: 'T1', name: 'Table 01', size: '2 Seats', status: 'available' },
  { id: 'T2', name: 'Table 02', size: '4 Seats', status: 'available' },
  { id: 'T3', name: 'Table 03', size: '4 Seats', status: 'unavailable' },
  { id: 'T4', name: 'Table 04', size: '6 Seats', status: 'available' },
];

export default function BookingSection() {
  const ref = useScrollReveal();
  const [selectedTime, setSelectedTime] = useState('4:00 PM');
  const [selectedTable, setSelectedTable] = useState('T1');
  const [guests, setGuests] = useState('2 Guests');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="booking" ref={ref} className="section" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="section-header sr" style={{ marginBottom: 48, textAlign: 'center' }}>
          <span className="label">04 / RESERVATION</span>
          <h2 className="display-sm" style={{ marginTop: 8 }}>RESERVE YOUR TABLE</h2>
          <p className="body-text" style={{ maxWidth: 540, margin: '12px auto 0' }}>
            Choose a date and time and plan your visit to KAFFA. Enjoy fresh roasts and cozy table settings.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(24px, 4vw, 48px)',
          alignItems: 'start'
        }}>
          {/* LEFT: Frame-style Cafe Interior Image & Info */}
          <div className="sr sr-delay-1" style={{
            border: '1px solid var(--border)',
            padding: 16,
            background: 'var(--offwhite)',
            borderRadius: 0,
            boxShadow: '0 10px 30px rgba(36,22,15,0.04)'
          }}>
            <div className="img-wrap" style={{ height: 380, marginBottom: 20 }}>
              <img
                src="/images/latte-art.jpg"
                alt="KAFFA Cozy Table Experience"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '8px 12px 12px' }}>
              <span className="label" style={{ marginBottom: 6 }}>Café Ambience</span>
              <h3 className="heading-sm" style={{ marginBottom: 10 }}>Specialty Coffee & Cozy Spaces</h3>
              <p className="body-sm" style={{ marginBottom: 16 }}>
                Whether it's a quiet morning espresso or an evening hangout, reserve a table to guarantee your space.
              </p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span className="body-sm" style={{ fontWeight: 600, color: 'var(--espresso)' }}>
                  Need instant assistance?
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--caramel)',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={14} /> Call direct: {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Booking Form */}
          <div className="sr sr-delay-2" style={{
            border: '1px solid var(--border)',
            background: 'var(--offwhite)',
            padding: 'clamp(24px, 4vw, 40px)',
            boxShadow: '0 10px 30px rgba(36,22,15,0.04)'
          }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                <CheckCircle2 size={56} style={{ color: 'var(--caramel)', margin: '0 auto 16px' }} />
                <h3 className="heading" style={{ marginBottom: 12 }}>Table Reserved!</h3>
                <p className="body-text" style={{ marginBottom: 24 }}>
                  Your table request for <strong>{name}</strong> on <strong>{date}</strong> at <strong>{selectedTime}</strong> has been recorded.
                </p>
                <div style={{
                  background: 'var(--cream)',
                  padding: 20,
                  border: '1px dashed var(--border)',
                  marginBottom: 24,
                  textAlign: 'left',
                  fontSize: '0.875rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>Guests:</span>
                    <strong style={{ color: 'var(--espresso)' }}>{guests}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>Table:</span>
                    <strong style={{ color: 'var(--espresso)' }}>{TABLES.find(t => t.id === selectedTable)?.name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--muted)' }}>Contact:</span>
                    <strong style={{ color: 'var(--espresso)' }}>{phone}</strong>
                  </div>
                </div>
                <button
                  className="btn btn-dark"
                  onClick={() => setIsSubmitted(false)}
                >
                  Reserve Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Date & Guests row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label className="body-sm" style={{ display: 'block', fontWeight: 600, color: 'var(--espresso)', marginBottom: 6 }}>
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--border)',
                        background: '#fff',
                        fontFamily: 'var(--sans)',
                        fontSize: '0.875rem',
                        color: 'var(--espresso)',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label className="body-sm" style={{ display: 'block', fontWeight: 600, color: 'var(--espresso)', marginBottom: 6 }}>
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--border)',
                        background: '#fff',
                        fontFamily: 'var(--sans)',
                        fontSize: '0.875rem',
                        color: 'var(--espresso)',
                        outline: 'none'
                      }}
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="body-sm" style={{ display: 'block', fontWeight: 600, color: 'var(--espresso)', marginBottom: 8 }}>
                    Select Time Slot
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat( auto-fill, minmax(80px, 1fr) )',
                    gap: 8
                  }}>
                    {TIME_SLOTS.map(slot => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          style={{
                            padding: '8px 4px',
                            fontSize: '0.75rem',
                            fontWeight: isSelected ? 600 : 400,
                            border: `1px solid ${isSelected ? 'var(--caramel)' : 'var(--border)'}`,
                            background: isSelected ? 'var(--caramel)' : '#fff',
                            color: isSelected ? '#fff' : 'var(--espresso)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            textAlign: 'center'
                          }}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Table Selection */}
                <div>
                  <label className="body-sm" style={{ display: 'block', fontWeight: 600, color: 'var(--espresso)', marginBottom: 8 }}>
                    Select Table
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                    {TABLES.map(table => {
                      const isSelected = selectedTable === table.id;
                      const isUnavailable = table.status === 'unavailable';
                      return (
                        <button
                          key={table.id}
                          type="button"
                          disabled={isUnavailable}
                          onClick={() => setSelectedTable(table.id)}
                          style={{
                            padding: '10px 12px',
                            border: `1px solid ${isSelected ? 'var(--caramel)' : 'var(--border)'}`,
                            background: isSelected
                              ? 'var(--caramel)'
                              : isUnavailable
                              ? 'var(--cream)'
                              : '#fff',
                            color: isSelected
                              ? '#fff'
                              : isUnavailable
                              ? 'var(--muted)'
                              : 'var(--espresso)',
                            opacity: isUnavailable ? 0.6 : 1,
                            cursor: isUnavailable ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            justify: 'space-between',
                            alignItems: 'center',
                            textAlign: 'left',
                            fontSize: '0.8rem',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 600 }}>{table.name}</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{table.size}</div>
                          </div>
                          <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {isUnavailable ? 'Taken' : isSelected ? 'Selected' : 'Available'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label className="body-sm" style={{ display: 'block', fontWeight: 600, color: 'var(--espresso)', marginBottom: 6 }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--border)',
                        background: '#fff',
                        fontFamily: 'var(--sans)',
                        fontSize: '0.875rem',
                        color: 'var(--espresso)',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label className="body-sm" style={{ display: 'block', fontWeight: 600, color: 'var(--espresso)', marginBottom: 6 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="9825336364"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--border)',
                        background: '#fff',
                        fontFamily: 'var(--sans)',
                        fontSize: '0.875rem',
                        color: 'var(--espresso)',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                >
                  CONFIRM TABLE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
