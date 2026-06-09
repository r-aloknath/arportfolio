import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 3600; // revalidate every hour

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://aloknath.dev/sitemap.xml',
  };
}