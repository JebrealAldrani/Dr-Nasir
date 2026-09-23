import type { MetadataRoute } from "next";
import { CERTIFICATES } from "@/static/certificates";
import { absoluteUrl, SITE_URL } from "@/static/site";
import { MILESTONES } from "@/static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return ["/", "/about", "/expertise", "/contact", "/experience", "/certificates", ...MILESTONES.map(({ slug }) => `/experience/${slug}`), ...CERTIFICATES.map(({ slug }) => `/certificates/${slug}`)]
    .map((path) => ({ url: absoluteUrl(path)! }));
}
