import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: { default: 'ToolKH – Free Online Tools for Everyone', template: '%s | ToolKH' },
  description: 'Free online tools for text processing, development, and everyday utilities. No signup required. Fast, private, and free.',
  keywords: ['free online tools', 'text tools', 'developer tools', 'Cambodia tools', 'QR code generator', 'JSON formatter', 'word counter'],
  authors: [{ name: 'ToolKH Team' }],
  creator: 'ToolKH',
  metadataBase: new URL('https://toolkh.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toolkh.com',
    siteName: 'ToolKH',
    title: 'ToolKH – Free Online Tools for Everyone',
    description: 'Free online tools for text, development, and utilities. No signup. Instant results.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ToolKH – Free Online Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolKH – Free Online Tools',
    description: 'Free online tools for text, development, and utilities.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  other: { 'google-adsense-account': 'ca-pub-4668360136549544' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4668360136549544"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var t=localStorage.getItem('theme')||
              (window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
            document.documentElement.classList.toggle('dark',t==='dark');
          })();
        `}} />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 60px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
