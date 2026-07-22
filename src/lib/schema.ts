import { siteInfo, whatsappLink } from "@/lib/site-data";
import type { FaqEntry } from "@/components/Faq/FaqItem";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: siteInfo.name,
    url: siteInfo.url,
    image: siteInfo.ogImage,
    telephone: siteInfo.phoneE164,
    email: siteInfo.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cabula",
      addressLocality: siteInfo.addressLocality,
      addressRegion: siteInfo.addressRegion,
      addressCountry: siteInfo.addressCountry,
    },
    areaServed: siteInfo.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
    sameAs: [whatsappLink],
  };
}

export function getFaqPageSchema(entries: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}
