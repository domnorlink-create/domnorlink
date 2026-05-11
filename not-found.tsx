import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ maxWidth: 600, margin: '4rem auto', padding: '1.5rem 1rem', textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>404 – Page Not Found</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" className="btn-primary">← Go Home</Link>
        <Link href="/tools" className="btn-secondary">Browse Tools</Link>
      </div>
    </div>
  );
}
