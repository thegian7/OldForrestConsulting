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
      "Managed Intelligence for trades, factories, franchises, and property management. One firm that integrates, embeds, maintains, and builds the stack your business actually runs on, and handles your vendors.",
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
      "Operations consulting for trades, factories, franchises, and property management. One firm that integrates, embeds, maintains, and builds your stack, and handles your vendors.",
    priceRange: "$5,000 - $40,000 / month",
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
      name: "Engagement tiers",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Embed",
            description:
              "90-day configuration sprint that takes a business from tool sprawl to a working, integrated stack with live dashboards and documented runbooks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Operate",
            description:
              "Active ongoing engagement: dashboard iteration, vendor management, new integrations, and monthly strategy review.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maintain",
            description:
              "On-call software and hardware support with integration monitoring and a monthly review cadence.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Build",
            description:
              "Discrete fixed-fee projects: integrations, custom tooling, dashboards, migrations, website rebuilds.",
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
