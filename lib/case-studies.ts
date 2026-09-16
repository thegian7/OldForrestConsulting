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
        engagement: "Ongoing · multi-year",
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
            "ERK's ownership now has cross-entity visibility they couldn't get before. Each operating company has a CRM pipeline that's actually trusted. Vendor count is down; coordination overhead is near zero. The engagement runs on a single fixed monthly fee — not an hourly meter — covering named systems across the holding, with out-of-scope work priced separately and in writing.",
        stats: [
            { value: "4+", label: "Operating entities supported" },
            { value: "1", label: "Partner replacing a fleet of vendors" },
            { value: "Fixed", label: "Monthly fee, not hourly" },
        ],
        referenceNote:
            "Client references available on request. Ben Ercanbrack (ERK Holdings) and Derek Hansen (Dark Sky) have both agreed to speak directly with serious prospects about the engagement experience.",
    },
    {
        slug: "deterministic-spatial-platform",
        client: "Dark Sky",
        summary:
            "A generative-AI vendor had delivered survey overlays with geometry that wasn't there — a transmission line in the wrong place, a pole inventory that didn't match the ground. We rebuilt the pipeline so that every placed feature and every number traces to real survey data, and proved it with guards that fail the build if a model ever touches the output.",
        industries: ["Aerial survey", "Geospatial", "Energy"],
        entities: "Platform + client-facing deliverables",
        engagement: "Fixed-fee build · delivered and handed over",
        situation:
            "The client's prior deliverable had been produced with generative image models. It looked convincing and was wrong: a transmission line had moved from its surveyed position, and a pole inventory was miscounted. For work that feeds engineering and siting decisions, plausible-looking output is worse than no output — it carries the authority of a survey without the accountability of one. They needed overlays and viability studies their own customers could stake a decision on.",
        workItems: [
            "Built a deterministic CAD-to-overlay pipeline: survey CAD and classified point-cloud/GIS data placed on a georeferenced orthomosaic, where every point, line, and polygon lands where the data says it lands",
            "Enforced the guarantee in code — a static analysis guard and a runtime import guard that fail on every test run if generative model code enters the overlay path at all",
            "Constrained the study writer so it can smooth prose but cannot introduce a single number the statistics layer didn't compute, checked by a digit-level diff on every text surface",
            "Exposed the platform three ways — Python library, console tools, and an agent-callable server — so it fits existing workflows instead of replacing them",
            "Delivered a written scope-and-limits document stating precisely what the no-AI guarantee does and does not cover",
            "Transferred ownership at handover, with the client holding the code outright",
        ],
        outcome:
            "The client can now put a number in front of their own customer and say where it came from. The determinism claim isn't a promise in a sales deck — it's a test that fails the build, which means it survives staff turnover and future changes. Ownership transferred on day one of the agreement, so the platform is theirs, not rented.",
        stats: [
            { value: "0", label: "Generative-model code paths in the overlay" },
            { value: "440+", label: "Automated tests at handover" },
            { value: "Day one", label: "Client ownership of the code" },
            { value: "Fixed", label: "Price agreed before work started" },
        ],
        referenceNote:
            "Derek Hansen, Dark Sky, has agreed to speak with serious prospects. End-customer details remain under NDA.",
    },
    {
        slug: "cribster",
        client: "Cribster",
        summary:
            "A founding team with a clear product idea and no engineering organization. We built and now run the whole thing — a consumer listings app fed by a live MLS feed, plus the agent-facing side that makes it a business. It has been live at cribster.io for months, expanding under change orders rather than stalling.",
        industries: ["Proptech", "Real estate", "Consumer software"],
        entities: "Two-sided platform · consumers + licensed agents",
        engagement: "Ongoing · milestone-based, now expanding under change orders",
        situation:
            "The founders had validated the idea and had no team to build it. Two audiences had to be served by one product: home shoppers who expect a feed that behaves like the apps they already use, and licensed agents who need to see that the platform actually sends them business. Underneath both sits a live MLS feed — authoritative, externally owned, and unforgiving about how you treat it.",
        workItems: [
            "Built the consumer application end to end — swipe-based listing discovery, saved-state and engagement tracking, county and ZIP search with typeahead",
            "Integrated the regional MLS feed over its RESO Web API, with scheduled sync and status normalization so listing state never contradicts the source of record",
            "Built the agent side: dashboard, per-listing analytics, contact attribution, agent-to-client invite linking, and a paid premium tier on Stripe",
            "Stood up the production platform — Postgres, a job queue for bulk work, media CDN, OAuth and magic-link sign-in, rate limiting, staging-first deploys",
            "Migrated the database off a managed host onto dedicated infrastructure when the vendor's plan was withdrawn, without downtime",
            "Kept delivery legible: milestones accepted and invoiced in sequence, later work added as written change orders rather than absorbed silently",
        ],
        outcome:
            "Cribster is live at cribster.io and in daily use, and the engagement has outlasted its original scope — the founders keep buying more of it, which is the only durable signal that a build was right. They have no engineering headcount and do not need any: one partner owns the application, the data pipeline, and the infrastructure it runs on.",
        stats: [
            { value: "~12,800", label: "Listings synced from the MLS feed" },
            { value: "700+", label: "Commits on the production codebase" },
            { value: "0", label: "In-house engineers required" },
            { value: "2", label: "Change orders added past original scope" },
        ],
        referenceNote:
            "Client name and reference available on request.",
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
    return caseStudies.map((study) => study.slug);
}
