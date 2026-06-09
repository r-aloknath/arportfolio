import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import ThemeInitializer from '@/components/ThemeInitializer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aloknath Rath | Independent Full-Stack Tech Consultant',
  description:
    'Angular, React, Node.js consultant helping product teams ship faster. Available for freelance and contract engagements.',
  keywords:
    'tech consultant, angular developer, react consultant, full-stack developer, nodejs expert, freelance developer',
  authors: [{ name: 'Aloknath Rath' }],
  creator: 'Aloknath Rath',
  openGraph: {
    title: 'Aloknath Rath — Independent Tech Consultant',
    description:
      'Full-stack specialist in Angular, React, Node.js. I help teams build fast, scalable web systems.',
    url: 'https://aloknath.dev',
    siteName: 'Aloknath Rath Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aloknath Rath — Tech Consultant',
    description:
      'Angular, React, Node.js expert. Available for consulting engagements.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <head>
        <ThemeInitializer />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}