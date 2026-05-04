import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export const dynamic = "force-static";

const BASE_URL = "https://oldforrest.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1, changeFrequency: "weekly" },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/who-we-serve`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/pricing`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/case-studies`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "yearly" },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/legal`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/legal/terms`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/legal/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/legal/msa`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/legal/sow`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/legal/nda`, priority: 0.3, changeFrequency: "yearly" },
  ];

  return [...corePages, ...caseStudyPages, ...legalPages].map((entry) => ({
    ...entry,
    lastModified: now,
  }));
}
