'use client';
import { useState } from 'react';
import { AdSenseBanner } from '@/components/ads/AdSenseBlock';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>Contact Us</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Have a suggestion, bug report, or question? We&apos;d love to hear from you.</p>
      <AdSenseBanner />
      {sent ? (
        <div className="card" style={{ padding: '2rem', textAlign: 'center', marginTop: '1.5rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
          <h2 style={{ color: 'var(--text)', margin: '0 0 0.5rem' }}>Message Sent!</h2>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Thanks for reaching out. We typically respond within 24 hours.</p>
        </div>
      ) : (
        <div className="card" style={{ padding: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem' }}>Name</label>
              <input type="text" className="input-base" placeholder="Your name" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem' }}>Email</label>
              <input type="email" className="input-base" placeholder="your@email.com" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem' }}>Subject</label>
              <select className="input-base">
                <option>Tool suggestion</option>
                <option>Bug report</option>
                <option>General question</option>
                <option>Business inquiry</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem' }}>Message</label>
              <textarea className="textarea-base" placeholder="Tell us more..." style={{ minHeight: 150 }} />
            </div>
            <button className="btn-primary" onClick={() => setSent(true)} style={{ alignSelf: 'flex-start' }}>Send Message</button>
          </div>
        </div>
      )}
    </div>
  );
}
