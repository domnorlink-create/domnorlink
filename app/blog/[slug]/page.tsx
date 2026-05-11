import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { AdSenseBanner } from '@/components/ads/AdSenseBlock';

export const metadata: Metadata = {
  title: 'Blog – Tips, Guides & Tutorials',
  description: 'Read guides and tutorials about online tools, developer utilities, and Cambodia tech.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.35rem' }}>Blog</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Guides, tutorials, and tips from the ToolKH team</p>
      <AdSenseBanner />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ padding: '1.25rem', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="badge badge-blue">{post.category}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{post.readTime} min read</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginLeft: 'auto' }}>{post.date}</span>
              </div>
              <h2 style={{ margin: '0 0 0.35rem', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>{post.title}</h2>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
