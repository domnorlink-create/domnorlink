# ToolKH – Free Online Tools Platform

A modern SaaS-style free online tools platform built with Next.js 15, TypeScript, and TailwindCSS. Optimized for Google AdSense, SEO, and global use with special Cambodia-specific tools.

## 🚀 Tech Stack

- **Next.js 15** (App Router, Static Generation)
- **TypeScript** (full type safety)
- **TailwindCSS v4** (utility-first styling)
- **Markdown** blog engine (gray-matter + remark)
- **No database** required for MVP

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Tools Included (18+)

### Text Tools
- Word Counter
- Character Counter
- Case Converter
- Text Compare
- Lorem Ipsum Generator

### Developer Tools
- JSON Formatter & Validator
- Base64 Encoder/Decoder
- UUID Generator
- Hash Generator (SHA-1, SHA-256, SHA-512)
- URL Encoder/Decoder

### Utility Tools
- QR Code Generator
- Password Generator
- Random Number Generator
- Color Picker (HEX/RGB/HSL)
- Timestamp Converter

### Cambodia Tools 🇰🇭
- USD ↔ KHR Currency Converter
- Salary Tax Calculator (2024 brackets)
- Khmer Unicode Analyzer

## 📁 Project Structure

```
toolkh/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   ├── page.tsx            # Homepage
│   ├── tools/[slug]/       # Dynamic tool pages
│   ├── blog/[slug]/        # Blog post pages
│   ├── categories/[slug]/  # Category pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms & conditions
│   ├── search/             # Search results
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # SearchBar, ThemeToggle, ToolCard, FAQ, CopyButton, Breadcrumbs
│   ├── tools/              # All tool implementations + ToolLayout
│   └── ads/                # AdSenseBlock component
├── lib/
│   ├── tools.ts            # Tool metadata & helpers
│   └── blog.ts             # Blog post utilities
├── content/
│   └── blog/               # Markdown blog posts
└── public/
    └── ads.txt             # AdSense ads.txt
```

## 🌐 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set production domain
vercel --prod
```

The project is pre-configured for Vercel with:
- Static page generation
- Proper headers for security
- Image optimization for QR codes

## 💡 Adding New Tools

1. Add tool metadata to `lib/tools.ts`
2. Create component in `components/tools/YourTool.tsx`
3. Import it in `app/tools/[slug]/page.tsx`
4. That's it! Routing, SEO, and layout are automatic.

## 📝 Adding Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description for SEO"
date: "2024-12-01"
author: "ToolKH Team"
category: "General"
tags: ["tag1", "tag2"]
readTime: 5
---

Your content here...
```

## 💰 AdSense Configuration

1. Replace `ca-pub-4668360136549544` with your Publisher ID in:
   - `app/layout.tsx` (meta tag + Script)
   - `public/ads.txt`

2. AdSense placeholders are in `components/ads/AdSenseBlock.tsx`
3. Replace placeholder divs with real `<ins class="adsbygoogle">` tags after AdSense approval

## 🎨 Customization

### Theme Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: #1d4ed8;   /* Blue */
  --accent: #f97316;    /* Orange */
}
```

### Exchange Rate
Update `KHR_RATE` in `components/tools/UsdKhrConverter.tsx` to reflect current rates.

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliant
- Screen reader friendly

## 🔐 Security Headers

Configured in `next.config.ts`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`

## 📊 SEO Features

- Dynamic metadata per page
- OpenGraph & Twitter Card tags
- JSON-LD structured data ready
- Auto-generated sitemap.xml
- robots.txt configured
- Canonical URLs
- Fast Core Web Vitals

## 📄 License

MIT License — free to use for personal and commercial projects.

---

Built with ❤️ for Cambodia 🇰🇭 and the world 🌍
