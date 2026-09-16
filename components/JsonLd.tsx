const BASE_URL = "https://oldforrest.net";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Old Forrest Consulting",
    legalName: "Old Forrest Consulting LLC",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Managed Intelligence for operators whose records get challenged — by a regulator, an auditor, a counterparty, or a court — and who have nobody in-house whose job is keeping those systems honest. One firm that integrates, embeds, maintains, and builds the stack your business runs on, and handles your vendors.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressRegion: "UT",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "chris@oldforrest.net",
        availableLanguage: "English",
      },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProfessionalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Old Forrest Consulting",
    url: BASE_URL,
    description:
      "Operations and data consulting for organisations whose output has to survive being questioned. Fixed-fee projects with written change orders, or a flat monthly fee to run a named stack.",
    priceRange: "$2,500 - $12,000 / month",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "UT",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engagements",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Assessment",
            description:
              "Fixed-scope three-week engagement: systems and data inventory, where the numbers disagree and why, and a costed plan the client keeps.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Build",
            description:
              "Fixed-fee, milestone-billed projects: integrations, custom tooling, dashboards, migrations, platform builds. Additions arrive as written change orders.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed",
            description:
              "A flat monthly fee to run a named list of systems, with one scoped item included each month and out-of-scope work at a stated day rate.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Old Forrest Consulting",
    url: BASE_URL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
