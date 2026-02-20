import { CONTACT_INFO } from '@/constants/contact';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bespoke-pool-liners.co.uk';

interface SchemaProps {
  schema: object;
}

export function SchemaOrg({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness Schema for homepage
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Bespoke Pool Liners",
    "description": "Expert swimming pool liner installation, replacement and repair in Hampshire. Reinforced Renolit Alkorplan liners with 10-year watertight guarantee.",
    "url": SITE_URL,
    "telephone": "+447442986034",
    "email": CONTACT_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Romsey",
      "addressRegion": "Hampshire",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.9885,
      "longitude": -1.4996
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Hampshire" },
      { "@type": "AdministrativeArea", "name": "Surrey" },
      { "@type": "AdministrativeArea", "name": "Berkshire" },
      { "@type": "AdministrativeArea", "name": "Dorset" },
      { "@type": "AdministrativeArea", "name": "Wiltshire" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pool Liner Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pool Liner Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pool Liner Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pool Liner Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Site Pool Liner Welding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reinforced Pool Liners" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bagged Pool Liners" } }
      ]
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" }
    ]
  };

  return <SchemaOrg schema={schema} />;
}

// Service Schema for service pages
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `${SITE_URL}${url}`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Bespoke Pool Liners",
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Hampshire"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": name,
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": name
        }
      }]
    }
  };

  return <SchemaOrg schema={schema} />;
}

// FAQPage Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <SchemaOrg schema={schema} />;
}

// BreadcrumbList Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.url}`
    }))
  };

  return <SchemaOrg schema={schema} />;
}
