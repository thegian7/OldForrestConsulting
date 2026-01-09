export interface Problem {
    id: string;
    question: string;
    symptoms: string[];
    linkType: "case-study" | "contact";
    linkSlug?: string;
    linkLabel: string;
    icon: string;
}

export const problems: Problem[] = [
    {
        id: "replit-migration",
        question: "How do I get this off Replit/Lovable?",
        symptoms: [
            "Works in the IDE, deployment fails.",
            "Great for prototyping, challenging for production.",
            "Need a clear migration path to scalable infrastructure.",
        ],
        linkType: "contact",
        linkLabel: "Get Migration Help",
        icon: "Rocket",
    },
    {
        id: "ai-hallucination",
        question: "Why does my AI keep hallucinating?",
        symptoms: [
            "RAG returns garbage instead of real answers.",
            "Chatbot invents policies that don't exist.",
            "Model picks random answers instead of saying \"I don't know.\"",
        ],
        linkType: "case-study",
        linkSlug: "paperless-gpt",
        linkLabel: "See How We Fixed It",
        icon: "Brain",
    },
    {
        id: "stripe-webhooks",
        question: "My Stripe webhooks aren't firing",
        symptoms: [
            "Events not triggering as expected.",
            "Test mode works, live mode doesn't.",
            "Timing out before returning 200.",
        ],
        linkType: "case-study",
        linkSlug: "edify-platform",
        linkLabel: "See Our Stripe Work",
        icon: "CreditCard",
    },
    {
        id: "developer-quit",
        question: "My developer quit mid-project",
        symptoms: [
            "Project mostly complete but stalled.",
            "Difficult to understand the existing codebase.",
            "Need someone to take over and finish.",
        ],
        linkType: "contact",
        linkLabel: "Get Project Rescue",
        icon: "UserX",
    },
    {
        id: "ai-tools-breaking",
        question: "Cursor/Claude keeps breaking my code",
        symptoms: [
            "Gets stuck in a loop, can't fix its own errors.",
            "Completely misunderstands the context.",
            "Works on small files, falls apart on real codebases.",
        ],
        linkType: "contact",
        linkLabel: "Get Stabilization Help",
        icon: "Bug",
    },
    {
        id: "credits-burning",
        question: "My AI app is using too many credits",
        symptoms: [
            "Costs higher than expected for the usage level.",
            "Inefficient API calls and redundant processing.",
            "Need optimization without sacrificing functionality.",
        ],
        linkType: "case-study",
        linkSlug: "paperless-ai-system",
        linkLabel: "See Efficient AI Architecture",
        icon: "Flame",
    },
    {
        id: "deploy-yesterday",
        question: "I need this deployed quickly",
        symptoms: [
            "MVP ready but need deployment expertise.",
            "Limited experience with Docker and containers.",
            "Want CI/CD setup without weeks of learning.",
        ],
        linkType: "contact",
        linkLabel: "Get Deployment Help",
        icon: "Zap",
    },
    {
        id: "chatbot-production",
        question: "Why isn't my chatbot working in production?",
        symptoms: [
            "Demo worked well, production has issues.",
            "Context window fills up during conversations.",
            "Missing guardrails for off-topic queries.",
        ],
        linkType: "case-study",
        linkSlug: "paperless-gpt",
        linkLabel: "See Production AI",
        icon: "MessageSquareX",
    },
];

export function getProblemById(id: string): Problem | undefined {
    return problems.find((problem) => problem.id === id);
}
