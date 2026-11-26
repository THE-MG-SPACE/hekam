import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://shreemsewingmachine.com';

  return [
    { url: siteUrl },
    { url: `${siteUrl}/privacy-policy` },
    { url: `${siteUrl}/terms-and-conditions` },
  ];
}
