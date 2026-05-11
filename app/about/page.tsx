import type { Metadata } from 'next';
import { AdSenseBanner } from '@/components/ads/AdSenseBlock';

export const metadata: Metadata = {
  title: 'About ToolKH',
  description: 'Learn about ToolKH — free online tools built for Cambodia and the world.',
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>About ToolKH</h1>
      <AdSenseBanner />
      <div className="card" style={{ padding: '1.5rem', marginTop: '1.5rem' }}>
        <div className="prose-content">
          <h2>Our Mission</h2>
          <p>ToolKH was created with a simple mission: provide free, fast, and privacy-focused online tools for everyone — with special attention to the needs of users in Cambodia.</p>
          <h2>What We Offer</h2>
          <p>We offer 18+ free tools across four categories:</p>
          <ul>
            <li><strong>Text Tools</strong> — Word counters, case converters, text comparison tools</li>
            <li><strong>Developer Tools</strong> — JSON formatter, Base64 encoder, UUID generator, hash generator</li>
            <li><strong>Utility Tools</strong> — QR code generator, password generator, color picker</li>
            <li><strong>Cambodia Tools</strong> — USD/KHR converter, salary tax calculator, Khmer Unicode converter</li>
          </ul>
          <h2>Privacy First</h2>
          <p>All tools run entirely in your browser. Your data is never sent to our servers, never stored, and never shared. What happens in your browser stays in your browser.</p>
          <h2>Always Free</h2>
          <p>ToolKH is and will always be free. We are supported by advertising. No subscriptions, no premium tiers, no hidden costs.</p>
          <h2>Contact Us</h2>
          <p>Have a suggestion for a new tool, found a bug, or want to collaborate? Visit our <a href="/contact">Contact page</a>.</p>
        </div>
      </div>
    </div>
  );
}
