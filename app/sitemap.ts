import { MetadataRoute } from 'next';
import { getPortfolioData } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getPortfolioData();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://password-devops-portfolio-project.vercel.app';
  const lastModified = new Date();

  // Base routes
  const routes = [
    '',
    '/resume',
    '/portfolio',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts (if any)
  const blogRoutes = data.blog.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
