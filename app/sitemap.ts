import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://universesloans.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/personal-loan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/home-loan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/business-loan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/car-loan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/cgtmse-loan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/education-loan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/loan-against-property`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/working-capital`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/collateral-free-loan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/gold-loan`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/business-collateral-loans`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/home-car-mortgage-loans`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]
}
