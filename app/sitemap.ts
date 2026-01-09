import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export const dynamic = "force-static";

const BASE_URL = "https://oldforrest.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyUrls = caseStudies.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/we-can-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...caseStudyUrls,
  ];
}
