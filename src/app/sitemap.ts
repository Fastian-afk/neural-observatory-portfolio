import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://imaad-fazal-portfolio-hub.vercel.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
