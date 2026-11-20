import type { MetadataRoute } from "next";
import { SERVICE_CATEGORIES } from "@/lib/mtech-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mtechpropertysolutions.co.uk";
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/areas-we-cover`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map(
    (service) => ({
      url: `${baseUrl}/${service.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  return [...staticRoutes, ...serviceRoutes];
}
