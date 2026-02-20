import { generateMetadata as genMeta, PAGE_METADATA } from '@/lib/metadata';

export const metadata = genMeta(PAGE_METADATA.faq);

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
