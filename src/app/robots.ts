import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/signin", "/signup"],
    },
    sitemap: "https://samperingenieria.vercel.app/sitemap.xml",
  };
}