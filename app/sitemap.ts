import type { MetadataRoute } from "next";

const SITE_URL = "https://www.chandlersdetailing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/contact", "/booking"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
