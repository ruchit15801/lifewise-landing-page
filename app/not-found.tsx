import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { NotFoundPage } from "@/components/NotFoundPage";
import { buildNotFoundMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildNotFoundMetadata();

function notFoundSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#not-found`,
    name: "Page not found | LifeWise",
    description:
      "This LifeWise URL does not exist. Visit the official LifeWise - AI Family Hub homepage or support.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Page not found"
        }
      ]
    },
    significantLink: [
      `${SITE_URL}/`,
      `${SITE_URL}/support`,
      `${SITE_URL}/privacy-policy`,
      `${SITE_URL}/terms-and-conditions`
    ]
  };
}

export default function NotFound() {
  return (
    <>
      <JsonLd data={notFoundSchema()} />
      <NotFoundPage />
    </>
  );
}
