import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { tools, getToolBySlug } from '@/lib/tools';
import dynamic from 'next/dynamic';

export async function generateStaticParams() {
  return tools.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} – Free Online Tool`,
    description: tool.description,
    keywords: tool.tags,
    openGraph: { title: `${tool.name} – Free Online Tool`, description: tool.description },
  };
}

const toolComponents: Record<string, React.ComponentType> = {
  'word-counter': dynamic(() => import('@/components/tools/WordCounter')),
  'character-counter': dynamic(() => import('@/components/tools/CharacterCounter')),
  'case-converter': dynamic(() => import('@/components/tools/CaseConverter')),
  'text-compare': dynamic(() => import('@/components/tools/TextCompare')),
  'lorem-ipsum': dynamic(() => import('@/components/tools/LoremIpsum')),
  'json-formatter': dynamic(() => import('@/components/tools/JsonFormatter')),
  'base64': dynamic(() => import('@/components/tools/Base64')),
  'uuid-generator': dynamic(() => import('@/components/tools/UuidGenerator')),
  'hash-generator': dynamic(() => import('@/components/tools/HashGenerator')),
  'url-encoder': dynamic(() => import('@/components/tools/UrlEncoder')),
  'qr-generator': dynamic(() => import('@/components/tools/QrGenerator')),
  'password-generator': dynamic(() => import('@/components/tools/PasswordGenerator')),
  'random-number': dynamic(() => import('@/components/tools/RandomNumber')),
  'color-picker': dynamic(() => import('@/components/tools/ColorPicker')),
  'timestamp-converter': dynamic(() => import('@/components/tools/TimestampConverter')),
  'usd-khr-converter': dynamic(() => import('@/components/tools/UsdKhrConverter')),
  'salary-tax-calculator': dynamic(() => import('@/components/tools/SalaryTaxCalculator')),
  'khmer-unicode': dynamic(() => import('@/components/tools/KhmerUnicode')),
};

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const ToolComponent = toolComponents[slug];
  if (!ToolComponent) notFound();

  return <ToolComponent />;
}
