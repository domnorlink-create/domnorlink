import Link from 'next/link';
import SearchBar from '@/components/ui/SearchBar';
import ToolCard from '@/components/ui/ToolCard';
import FAQ from '@/components/ui/FAQ';
import { AdSenseBanner, AdSenseInline } from '@/components/ads/AdSenseBlock';
import { getPopularTools, categories } from '@/lib/tools';
import { getAllPosts } from '@/lib/blog';

const homeFAQs = [
  { q: 'Are all tools free?', a: 'Yes! Every tool on ToolKH is 100% free with no signup or account required.' },
  { q: 'Is my data private?', a: 'All tools run entirely in your browser. Your data never leaves your device or gets sent to our servers.' },
  { q: 'Do tools work on mobile?', a: 'Yes, all tools are fully responsive and optimized for mobile, tablet, and desktop.' },
  { q: 'How many tools are available?', a: 'We currently offer 18+ tools across text, developer, utility, and Cambodia-specific categories, with more added regularly.' },
  { q: 'Can I request a new tool?', a: "Absolutely! Use the Contact page to suggest tools you'd like to see on ToolKH." },
];

export default function HomePage() {
  const popularTools = getPopularTools();
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '3rem 1rem 4rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 9999, padding: '0.3rem 0.9rem', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            🇰🇭 Built for Cambodia &amp; the World
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Free Online Tools for<br />
            <span style={{ color: '#fbbf24' }}>Developers &amp; Everyone</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', opacity: 0.9, maxWidth: 560, margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
            18+ powerful tools for text, development, and utilities. No signup, no limits, instant results.
          </p>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <SearchBar />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
            {['Word Counter', 'JSON Formatter', 'QR Code', 'Password Generator', 'USD to KHR'].map(t => (
              <span key={t} style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 9999, padding: '0.25rem 0.75rem', fontSize: '0.78rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem' }}>
        <AdSenseBanner />

        {/* Popular Tools */}
        <section style={{ margin: '2.5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)' }}>Popular Tools</h2>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Most used tools by our visitors</p>
            </div>
            <Link href="/tools" className="btn-secondary" style={{ fontSize: '0.82rem' }}>View all →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
            {popularTools.map(t => <ToolCard key={t.slug} tool={t} />)}
          </div>
        </section>

        {/* Categories */}
        <section style={{ margin: '2.5rem 0' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)' }}>Tool Categories</h2>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Browse tools by category</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {categories.map(cat => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card cat-card-home" style={{ padding: '1.25rem', cursor: 'pointer' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
                  <h3 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>{cat.name}</h3>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <style>{`.cat-card-home:hover{border-color:var(--primary-light)!important;}`}</style>
        </section>

        <AdSenseInline />

        {/* Blog */}
        {posts.length > 0 && (
          <section style={{ margin: '2.5rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)' }}>Latest Articles</h2>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Guides and tutorials from our team</p>
              </div>
              <Link href="/blog" className="btn-secondary" style={{ fontSize: '0.82rem' }}>All posts →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '1.25rem', height: '100%', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className="badge badge-blue">{post.category}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{post.readTime} min read</span>
                    </div>
                    <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{post.excerpt}</p>
                    <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>{post.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Stats */}
        <section style={{ margin: '2.5rem 0', backgroundColor: 'var(--bg-secondary)', borderRadius: 16, padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)' }}>Why Choose ToolKH?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🆓', value: '100% Free', desc: 'No hidden fees ever' },
              { icon: '🔒', value: 'Private', desc: 'Data stays in browser' },
              { icon: '⚡', value: 'Instant', desc: 'No loading waits' },
              { icon: '📱', value: 'Mobile', desc: 'Works on all devices' },
              { icon: '🌍', value: 'Global', desc: 'Available worldwide' },
              { icon: '🇰🇭', value: 'Cambodia', desc: 'Local tools included' },
            ].map(s => (
              <div key={s.value}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.35rem' }}>{s.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.2rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ margin: '2.5rem 0' }}>
          <h2 style={{ margin: '0 0 1rem', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)' }}>Frequently Asked Questions</h2>
          <FAQ items={homeFAQs} />
        </section>

        {/* Newsletter CTA */}
        <section style={{ margin: '2.5rem 0', backgroundColor: 'var(--primary)', borderRadius: 16, padding: '2rem', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 800 }}>Stay Updated</h2>
          <p style={{ margin: '0 0 1.25rem', opacity: 0.9, fontSize: '0.9rem' }}>Get notified when we add new tools and features.</p>
          <div style={{ display: 'flex', gap: '0.5rem', maxWidth: 400, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input type="email" placeholder="your@email.com" style={{ flex: 1, minWidth: 180, padding: '0.6rem 1rem', borderRadius: 8, border: 'none', fontSize: '0.875rem', outline: 'none' }} />
            <button className="btn-accent" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
          </div>
        </section>

        <AdSenseInline />
      </div>
    </>
  );
}
