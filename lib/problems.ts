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
            "\"Great to spin up, terrible once the project grows.\"",
            "Only 15% of Replit projects make it to production.",
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
            "\"Wasted hours testing account.updated—never triggered.\"",
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
            "80% done, then ghosted.",
            "\"The graveyard of node_modules folders.\"",
            "New dev can't make sense of it. Investors asking for updates.",
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
        question: "My AI app burns through credits doing nothing",
        symptoms: [
            "Credits disappear from platform inefficiencies, not your work.",
            "Debugging cycles drain the monthly allocation.",
            "Repeating tasks because it fails to follow instructions.",
        ],
        linkType: "case-study",
        linkSlug: "paperless-ai-system",
        linkLabel: "See Efficient AI Architecture",
        icon: "Flame",
    },
    {
        id: "deploy-yesterday",
        question: "I need this deployed yesterday",
        symptoms: [
            "MVP ready but no DevOps knowledge.",
            "Don't know Docker. Don't have weeks to learn it.",
            "Need CI/CD but can't afford to wait.",
        ],
        linkType: "contact",
        linkLabel: "Get Deployment Help",
        icon: "Zap",
    },
    {
        id: "chatbot-production",
        question: "Why is my chatbot useless in production?",
        symptoms: [
            "Demo worked great. Real users get nonsense.",
            "Context window fills up mid-conversation.",
            "No guardrails for hallucinations or off-topic queries.",
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
