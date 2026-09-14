import { SITE_URL } from "@/lib/seo";

/**
 * Every public, indexable URL for lifewiseee.com.
 * Update this file when adding new pages - sitemap.xml is generated from here.
 *
 * Homepage sections (#family, #faq, #pricing, #download) live on `/` - do not add
 * hash URLs to the sitemap; Google indexes one URL per page.
 */
export type SitemapRoute = {
  path: string;
  label: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

export const INDEXABLE_ROUTES: SitemapRoute[] = [
  {
    path: "/",
    label: "LifeWise - AI Family Hub | Official India app, Family Hub & reminders",
    changeFrequency: "weekly",
    priority: 1
  },
  {
    path: "/support",
    label: "LifeWise Support & Contact India | Customer Care WhatsApp",
    changeFrequency: "weekly",
    priority: 0.9
  },
  {
    path: "/privacy-policy",
    label: "LifeWise Privacy Policy - DPDP Act India",
    changeFrequency: "monthly",
    priority: 0.7
  },
  {
    path: "/terms-and-conditions",
    label: "LifeWise Terms and Conditions India",
    changeFrequency: "monthly",
    priority: 0.7
  }
];

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}
