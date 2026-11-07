import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Bilal Tahir — Full Stack AI Engineer',
  description: 'Muhammad Bilal Tahir builds agentic AI, computer vision systems, reliable platforms, and complete digital products. Explore selected work and get in touch.',
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'Muhammad Bilal Tahir — Full Stack AI Engineer', description: 'Research mindset. Builder’s hands. AI systems and full stack products built with intent.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
