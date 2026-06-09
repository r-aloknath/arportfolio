import type { Metadata, Viewport } from 'next';
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

const baseUrl = 'https://aloknath.dev';

export const metadata: Metadata = {
  title: 'Aloknath Rath | Independent Full-Stack Tech Consultant | Angular • React • Node.js',
  description:
    'Senior full-stack tech consultant specializing in Angular, React, Node.js. I help product teams build fast, scalable web systems. Available for freelance and contract consulting engagements.',
  keywords:
    'tech consultant, independent consultant, angular developer, react consultant, full-stack developer, nodejs expert, freelance developer, contract engineer, web architecture, system design, scalable systems',
  authors: [{ name: 'Aloknath Rath', url: baseUrl }],
  creator: 'Aloknath Rath',
  publisher: 'Aloknath Rath',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Aloknath Rath — Independent Tech Consultant',
    description:
      'Full-stack specialist in Angular, React, Node.js. I help teams build fast, scalable web systems. Open for consulting engagements.',
    url: baseUrl,
    siteName: 'Aloknath Rath - Tech Consultant',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Aloknath Rath - Independent Tech Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aloknath Rath — Independent Tech Consultant',
    description:
      'Full-stack specialist in Angular, React, Node.js. Available for consulting engagements.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@aloknath',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aloknath Rath',
    url: 'https://aloknath.dev',
    email: 'aloknath.ar@gmail.com',
    jobTitle: 'Independent Tech Consultant',
    knowsAbout: [
      'Angular',
      'React',
      'Node.js',
      'Full-Stack Development',
      'Web Architecture',
      'System Design',
      'CI/CD',
      'DevOps',
      'Mobile Development',
    ],
    skills: [
      'Angular',
      'React',
      'React Native',
      'Node.js',
      'Express.js',
      'REST APIs',
      'TypeScript',
      'JavaScript',
      'MongoDB',
      'MySQL',
      'Docker',
      'GitHub Actions',
      'JWT Authentication',
      'Micro-frontend Architecture',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <ThemeInitializer />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}