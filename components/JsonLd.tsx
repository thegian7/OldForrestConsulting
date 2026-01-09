export function OrganizationJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Old Forrest Consulting",
    url: "https://oldforrest.net",
    logo: "https://oldforrest.net/logo.png",
    description:
      "Fractional CTO expertise for founders and teams who need real architecture, real execution, and real results—fast.",
    foundingDate: "2024",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ProfessionalServiceJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Old Forrest Consulting",
    url: "https://oldforrest.net",
    description:
      "Fractional CTO and technical leadership services for startups and growing teams.",
    priceRange: "$$$$",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consulting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Project Rescue",
            description:
              "Rescue stalled AI projects with expert technical leadership and implementation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fractional CTO",
            description:
              "Part-time technical leadership for startups and growing teams.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Development",
            description:
              "End-to-end development services using TypeScript, React, Node.js, and modern cloud infrastructure.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebSiteJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Old Forrest Consulting",
    url: "https://oldforrest.net",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://oldforrest.net/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
