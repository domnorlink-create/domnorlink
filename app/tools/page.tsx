import type { Metadata } from 'next';
import ToolCard from '@/components/ui/ToolCard';
import { tools, categories } from '@/lib/tools';
import Link from 'next/link';
import { AdSenseBanner } from '@/components/ads/AdSenseBlock';

export const metadata: Metadata = {
  title: 'All Free Online Tools',
  description: 'Browse all 18+ free online tools including text tools, developer utilities, QR code generator, password generator, and Cambodia-specific tools.',
};

export default function ToolsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800, color: 'var(--text)' }}>All Free Tools</h1>
        <p style={{ margin: '0.35rem 0 0', color: 'var(--text-muted)' }}>Browse {tools.length}+ free online tools — no signup required</p>
      </div>
      <AdSenseBanner />
      {categories.map(cat => {
        const catTools = tools.filter(t => t.category === cat.slug);
        return (
          <section key={cat.slug} style={{ margin: '2rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.25rem' }}>{cat.icon}</span>
              <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)' }}>{cat.name}</h2>
              <Link href={`/categories/${cat.slug}`} style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--primary)', textDecoration: 'none' }}>See all →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {catTools.map(t => <ToolCard key={t.slug} tool={t} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}
