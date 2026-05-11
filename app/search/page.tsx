import type { Metadata } from 'next';
import { searchTools } from '@/lib/tools';
import ToolCard from '@/components/ui/ToolCard';
import SearchBar from '@/components/ui/SearchBar';

export const metadata: Metadata = { title: 'Search Tools', description: 'Search free online tools on ToolKH' };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = q || '';
  const results = query ? searchTools(query) : [];

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1rem' }}>Search Tools</h1>
      <SearchBar />
      {query && (
        <div style={{ marginTop: '1.25rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
            {results.length} result{results.length !== 1 ? 's' : ''} for <strong>&quot;{query}&quot;</strong>
          </p>
          {results.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {results.map(t => <ToolCard key={t.slug} tool={t} />)}
            </div>
          ) : (
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>No tools found. Try a different search term.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
