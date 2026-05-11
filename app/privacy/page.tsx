import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'ToolKH Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1.5rem' }}>Privacy Policy</h1>
      <div className="card" style={{ padding: '1.5rem' }}>
        <div className="prose-content">
          <p><em>Last updated: December 2024</em></p>
          <h2>Data Collection</h2>
          <p>ToolKH does not collect personal data. All tools operate entirely in your browser. Text, files, or data you enter into our tools are never transmitted to our servers.</p>
          <h2>Cookies</h2>
          <p>We use minimal cookies only for theme preference (dark/light mode). No tracking cookies are set by our platform.</p>
          <h2>Third-Party Advertising</h2>
          <p>We use Google AdSense to display advertisements. Google may use cookies and collect data in accordance with their own privacy policy. You can opt out of personalized ads via Google&apos;s Ad Settings.</p>
          <h2>Analytics</h2>
          <p>We may use privacy-focused analytics to understand traffic patterns. This data is aggregated and anonymous.</p>
          <h2>Children&apos;s Privacy</h2>
          <p>ToolKH is not directed at children under 13. We do not knowingly collect data from children.</p>
          <h2>Contact</h2>
          <p>Questions? Contact us via our <a href="/contact">Contact page</a>.</p>
        </div>
      </div>
    </div>
  );
}
