export interface IntakeStep {
    title: string;
    body: string;
}

export const intakeSteps: IntakeStep[] = [
    {
        title: "Intro call — 30 minutes.",
        body: "Tell us about your business, the stack, and what's frustrating you right now. No slides, no pitch. We listen.",
    },
    {
        title: "Discovery session — 60–90 minutes.",
        body: "If there's a fit, we do a paid working session walking the stack together. You come away with a clear picture of what an engagement looks like.",
    },
    {
        title: "Scoped proposal — within 5 business days.",
        body: "The right tier for you — Embed, Operate, or Maintain — with a realistic scope and a fixed price. No surprises.",
    },
    {
        title: "Decide on your timeline.",
        body: "Yes, and we start when you're ready. No or not-yet, and we part cleanly. Either way you leave with a clearer picture of your own stack.",
    },
];
