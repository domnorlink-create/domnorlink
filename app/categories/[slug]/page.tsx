import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getToolsByCategory } from '@/lib/tools';
import ToolCard from '@/components/ui/ToolCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { AdSenseBanner } from '@/components/ads/AdSenseBlock';

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return {};
  return { title: `${cat.name} – Free Online Tools`, description: cat.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) notFound();
  const catTools = getToolsByCategory(slug);
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <Breadcrumbs crumbs={[{ label: 'Categories', href: '/categories' }, { label: cat.name }]} />
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '2.5rem' }}>{cat.icon}</span>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800, color: 'var(--text)' }}>{cat.name}</h1>
          <p style={{ margin: '0.25rem 0 0', color: 'var(--text-muted)' }}>{cat.description}</p>
        </div>
      </div>
      <AdSenseBanner />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem', marginTop: '1.5rem' }}>
        {catTools.map(t => <ToolCard key={t.slug} tool={t} />)}
      </div>
    </div>
  );
}
