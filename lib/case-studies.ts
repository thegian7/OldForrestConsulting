export interface CaseStudyStat {
    value: string;
    label: string;
}

export interface CaseStudy {
    slug: string;
    client: string;
    summary: string;
    industries: string[];
    entities: string;
    engagement: string;
    situation: string;
    workItems: string[];
    outcome: string;
    stats: CaseStudyStat[];
    referenceNote?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "erk-holdings",
        client: "ERK Holdings",
        summary:
            "A multi-entity construction and exteriors family of companies in Utah. Multiple CRMs, field tools, and accounting platforms — none talking to each other. We replaced the vendor fleet with one partner and built the cross-entity visibility ownership couldn't get before.",
        industries: ["Construction", "Roofing", "Exteriors"],
        entities: "4+ operating companies",
        engagement: "Ongoing · 12+ months",
        situation:
            "A Utah-based holding company with several operating businesses across construction, roofing, and exterior services. Multiple CRMs, field tools, time-tracking, and accounting platforms — none talking to each other. Ownership couldn't get a clear picture across entities. Vendor sprawl was real: a marketing agency, a website provider, a CRM partner, and several software tools with no unified owner.",
        workItems: [
            "Rebuilt the HubSpot portal — pipelines, deal stages, properties, associations across entities",
            "Configured forms, workflows, and auto-reply automations for Cardinal Roofing's inbound demand",
            "Built a live pipeline health dashboard in Next.js, deployed to a dedicated VPS",
            "Evaluated and selected workforce tools (time tracking, GPS fleet) with written comparison briefs",
            "Handled the Orem office's internet infrastructure decision (UTOPIA Fiber)",
            "Rebuilt Cardinal Roofing's website, coordinating the transition off the prior agency",
            "Active on-call coverage for software and hardware issues across entities",
        ],
        outcome:
            "ERK's ownership now has cross-entity visibility they couldn't get before. Each operating company has a CRM pipeline that's actually trusted. Vendor count is down; coordination overhead is near zero. The firm operates as fractional operational leadership across the holding — in-office regularly, available to leadership, with active expansion into additional entities.",
        stats: [
            { value: "4+", label: "Operating entities supported" },
            { value: "12+", label: "Months active engagement" },
            { value: "1", label: "Partner replacing a fleet of vendors" },
            { value: "~40%", label: "Below split-vendor cost equivalent" },
        ],
        referenceNote:
            "Client reference available on request. Derek Hansen, ERK Holdings, is happy to speak directly with serious prospects about the engagement experience.",
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
    return caseStudies.map((study) => study.slug);
}
