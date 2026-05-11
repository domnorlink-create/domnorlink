import type { Metadata } from 'next';
import Link from 'next/link';
import { categories, tools } from '@/lib/tools';
import { AdSenseBanner } from '@/components/ads/AdSenseBlock';

export const metadata: Metadata = {
  title: 'Tool Categories',
  description: 'Browse all tool categories on ToolKH.',
};

export default function CategoriesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.35rem' }}>Tool Categories</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Explore tools organized by category</p>
      <AdSenseBanner />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        {categories.map(cat => {
          const count = tools.filter(t => t.category === cat.slug).length;
          return (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} style={{ textDecoration: 'none' }}>
              <div className="card cat-card" style={{ padding: '1.5rem', cursor: 'pointer', height: '100%' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{cat.icon}</div>
                <h2 style={{ margin: '0 0 0.35rem', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>{cat.name}</h2>
                <p style={{ margin: '0 0 0.75rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{cat.description}</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>{count} tools →</span>
              </div>
            </Link>
          );
        })}
      </div>
      <style>{`.cat-card:hover{border-color:var(--primary-light)!important;}`}</style>
    </div>
  );
}
