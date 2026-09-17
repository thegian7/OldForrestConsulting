export interface RescueStep {
    head: string;
    body: string;
}

export interface RescueTrigger {
    slug: string;
    /** Matches how the buyer would search, not how we'd describe it. */
    title: string;
    metaTitle: string;
    metaDescription: string;
    /** The headline. Short, in their situation. */
    h1: string;
    h1Emphasis: string;
    /** What has actually happened, in plain terms. */
    situation: string[];
    /** Genuinely useful first moves, in order. This is the part that earns the ranking. */
    firstSteps: RescueStep[];
    /** How to judge severity before spending anything. */
    severity: string[];
    /** What this usually turns into with us. */
    outcome: string;
}

export const rescueTriggers: RescueTrigger[] = [
    {
        slug: "agency-shut-down",
        title: "Your web agency or dev shop shut down",
        metaTitle: "Our Web Agency Shut Down — What To Do Next",
        metaDescription:
            "Your agency closed and nobody is answering. Here is what to secure first, how to find out what you actually own, and what it costs to get the software back under control.",
        h1: "Your agency closed.",
        h1Emphasis: "The software didn't.",
        situation: [
            "An agency shutting down strands every client at once. The site or application keeps running, because hosting bills are usually paid ahead and nothing needs a human to keep serving traffic. What stops is anyone's ability to change it.",
            "The urgent problem is rarely the code. It is access: domains registered in the agency's account, hosting under their billing, DNS you cannot edit, repositories on a private account nobody has credentials for. Those things expire on a schedule that does not care that the company is gone.",
        ],
        firstSteps: [
            {
                head: "Find out who controls the domain, today.",
                body: "A public WHOIS lookup shows the registrar. If the registrar account is the agency's, that is your highest-priority recovery — an expired domain is far worse than broken code, and registrars have transfer processes that take days rather than minutes.",
            },
            {
                head: "Work out who the hosting bill goes to.",
                body: "If it is on the agency's card, you have until that card fails. If you can move billing to your own account without moving the site, do that first and separate the two problems.",
            },
            {
                head: "Ask for the code in writing, even if nobody replies.",
                body: "A dated written request matters later, whether the company is winding down formally or simply gone. Send it to every address and person you have.",
            },
            {
                head: "Take a copy of everything you can still reach.",
                body: "Export the database if you have any access, download the files, screenshot the admin panels, save the DNS records as they currently stand. Do this before touching anything, because a restore is only possible from something you kept.",
            },
            {
                head: "Do not let anyone 'just rebuild it' yet.",
                body: "A rebuild quoted before anyone has read the existing system is a guess. It is also the most expensive answer available, and often unnecessary.",
            },
        ],
        severity: [
            "Do you have the source code, or only the running site? Running-only is recoverable but changes the plan.",
            "Is the domain in an account you control? If not, that is the clock you are working against.",
            "Is there a database, and when was it last backed up by someone who still answers email?",
            "Does anything about the system touch payments, personal data, or records you are required to keep?",
        ],
        outcome:
            "Most of these start with a diagnostic because the honest answer to \"how bad is it\" is unknown until someone reads it. Recovery of access is usually days, not weeks. Whether the code is worth keeping is a separate question, and one you should have an independent answer to before anyone quotes you a rebuild.",
    },
    {
        slug: "developer-disappeared",
        title: "Your developer stopped responding",
        metaTitle: "Developer Stopped Responding and We Have No Access — What Now",
        metaDescription:
            "No hosting login, no domain account, no admin access, maybe no source code. How to work out what you actually own, what to secure first, and what recovery costs.",
        h1: "The developer stopped answering.",
        h1Emphasis: "You never had the logins.",
        situation: [
            "This is the most common version of the problem and the most avoidable in hindsight. One person built it, hosted it under their own accounts, and was the only route to changing anything. Then they stopped replying.",
            "Usually nothing is malicious. Freelancers get busy, take full-time jobs, get ill, or simply move on from a client they were never formally offboarded from. The effect on you is identical either way: a working system you cannot touch.",
        ],
        firstSteps: [
            {
                head: "Write down what you can actually log into.",
                body: "Not what you assume you have — what you can sign into right now. Domain registrar, hosting panel, CMS admin, database, email, analytics, payment processor, code repository. The gaps are the actual problem.",
            },
            {
                head: "Check the domain first and separately.",
                body: "Run a WHOIS lookup. If the registrant is the developer or their company, start a transfer conversation immediately, because a lapsed domain takes your email and your site down together.",
            },
            {
                head: "Reset what you can reset from your own email.",
                body: "Any service where your address is on the account can usually be recovered with a password reset. Do those before asking anyone for help — it often recovers more than people expect.",
            },
            {
                head: "Keep the requests short, dated and written.",
                body: "One clear message asking for the specific credentials, sent to every channel you have. If this later becomes a dispute, the record of a reasonable request matters more than its tone.",
            },
            {
                head: "Do not change hosting or DNS while you are guessing.",
                body: "Moving a site you do not yet understand is how a recoverable situation becomes an outage. Understand it first, move it second.",
            },
        ],
        severity: [
            "Can you sign into the domain registrar? This is the single most important answer.",
            "Is there a code repository you can reach, or is the running server the only copy?",
            "If the server vanished tonight, what would you still have?",
            "Is anyone's personal data in it, and would you be able to answer a request about that data?",
        ],
        outcome:
            "The first job is access, not code — and access recovery is usually faster and cheaper than people fear. Once you can reach the system, a diagnostic tells you whether what you have is worth continuing with or is better replaced, with a number attached either way.",
    },
    {
        slug: "developer-resigned",
        title: "Your only technical person resigned",
        metaTitle: "Our Only Developer Resigned — How To Not Lose The System",
        metaDescription:
            "The person who understood your software is leaving. What to capture in the notice period, in what order, and how to find out what you are actually exposed to.",
        h1: "They gave two weeks.",
        h1Emphasis: "Nobody else has ever opened it.",
        situation: [
            "This is the one case where timing is on your side, and almost nobody uses it. There is a window — usually two to four weeks — in which the person who knows everything is still contractually available to tell you. Most of that window gets spent on a farewell lunch and a folder of documents nobody can evaluate.",
            "The risk is not that they leave. It is that nobody can tell whether the handover was any good until months later, when something breaks and the answers are gone.",
        ],
        firstSteps: [
            {
                head: "Get a deploy done by someone else, with them watching.",
                body: "Not documented — actually performed. Have another person push a trivial change to production while the leaver supervises. Every gap in the process surfaces in an hour instead of in six months.",
            },
            {
                head: "Inventory access before anything else.",
                body: "Every account, key, certificate and third-party service, and whose name it is in. Personal accounts and personal API keys are the usual landmine, and they are invisible until they stop working.",
            },
            {
                head: "Ask what they were worried about.",
                body: "The most valuable thing a departing engineer has is the list of things they knew were fragile and never got to. Ask directly, write it down verbatim, and do not argue with it.",
            },
            {
                head: "Find out what only runs because they restart it.",
                body: "Almost every solo-maintained system has a manual step somebody does on a schedule. Find those now, because they fail silently and nobody else knows they existed.",
            },
            {
                head: "Bring the second pair of eyes in before the last day, not after.",
                body: "An independent read while the author is still reachable is worth several times the same read afterwards. This is the single highest-value thing available in the notice period.",
            },
        ],
        severity: [
            "Has anyone other than the leaver ever deployed this system successfully?",
            "Are there credentials, keys or services in their personal name?",
            "Is there anything that runs on a schedule only they maintain?",
            "How long could the business operate if the system froze exactly as it is today?",
        ],
        outcome:
            "A diagnostic inside the notice period is the cheapest version of this work, because the author is still available to answer questions. It produces a written picture of what you have, what is fragile, and what it would take to operate it without them — which is also the document you hand to whoever comes next.",
    },
    {
        slug: "platform-end-of-life",
        title: "The platform you built on is being shut down",
        metaTitle: "Our Software Platform Is Being Sunset — Migration Without Losing Records",
        metaDescription:
            "An end-of-life notice with a date you did not choose. How to scope the migration, what to get out before access ends, and how to keep records defensible through the move.",
        h1: "Someone else chose your deadline.",
        h1Emphasis: "The records still have to survive it.",
        situation: [
            "A vendor sunsets a product, gets acquired, or ends support for the version you run. You now have a date, and a migration nobody planned or budgeted for.",
            "The part that gets underestimated is not moving the features. It is moving the history. Years of records, attachments, audit trails and identifiers have to arrive intact and still reconcile with what they said before — especially anything you might have to defend to an auditor, a regulator or a counterparty later.",
        ],
        firstSteps: [
            {
                head: "Read what the vendor will actually give you, in writing.",
                body: "Export format, how far back, whether attachments come with it, and precisely when access ends. \"You can export your data\" is not an answer until you have seen a sample and its schema.",
            },
            {
                head: "Take a full export now, while access is normal.",
                body: "Do not wait for the migration plan. Export early, export again later, and keep both. Exports taken close to a shutdown date are frequently degraded or rate-limited.",
            },
            {
                head: "Decide what must reconcile, not just what must transfer.",
                body: "Pick the handful of numbers someone outside your company could ask you to prove — balances, totals, dates, chains of custody. Those define whether the migration succeeded, far better than a feature checklist.",
            },
            {
                head: "Identify what you will lose and decide about it deliberately.",
                body: "Some things never come across cleanly. Knowing which, and choosing to accept it in advance, is a completely different position from discovering it afterwards.",
            },
            {
                head: "Do not let the deadline pick your replacement.",
                body: "Forced timelines produce the migration that was easiest to sell, not the one that fits. A short scoping exercise up front usually buys back more time than it costs.",
            },
        ],
        severity: [
            "What is the actual end-of-access date, from the vendor in writing?",
            "Have you successfully taken and opened a full export, including attachments?",
            "Which numbers would you have to be able to prove after the move?",
            "Is there any regulatory or contractual retention requirement attached to this data?",
        ],
        outcome:
            "This trigger overlaps our main practice: a migration whose records have to stay defensible is exactly the work we do outside of rescue. A diagnostic scopes the move and tells you what reconciles, what does not, and what the honest cost is — before a vendor's date makes the decision for you.",
    },
    {
        slug: "ai-built-app-breaking",
        title: "Something built with AI is now load-bearing and breaking",
        metaTitle: "Our AI-Built App Is Breaking And Nobody Can Fix It",
        metaDescription:
            "It got built fast, got adopted faster, and now real people depend on it. How to find out what it actually does, what is unsafe, and what it costs to make it maintainable.",
        h1: "It got built fast.",
        h1Emphasis: "Now it's load-bearing.",
        situation: [
            "Someone in the business built a working tool without waiting for an engineering team. That was genuinely the right call — it exists, people use it, and it solved something real. The trouble starts when it becomes infrastructure without ever being treated as infrastructure.",
            "The specific failure mode is not bad code. It is that nobody can say with confidence what the system does, what it touches, or where it will fail next — including the person who built it, because it was generated rather than designed.",
        ],
        firstSteps: [
            {
                head: "Establish what it can reach.",
                body: "Which databases, which third-party accounts, whose API keys, what it can write to and what it can delete. Generated code is frequently over-permissioned, because the fastest path to working is the widest set of credentials.",
            },
            {
                head: "Find out whether anything sensitive is in it.",
                body: "Customer records, payment details, health or employment data, anything under a retention obligation. This decides how urgent the rest of the list is.",
            },
            {
                head: "Check whether the secrets are in the code.",
                body: "API keys and passwords pasted directly into files is the single most common issue in this category, and it is usually a same-day fix once someone looks.",
            },
            {
                head: "Confirm there are real backups, taken by something other than the app.",
                body: "Not a copy the app makes of itself. A backup you have restored from at least once.",
            },
            {
                head: "Write down what the business would do if it stopped tomorrow.",
                body: "If the answer is \"we couldn't operate,\" it is infrastructure and should be resourced as such. If the answer is \"we'd go back to a spreadsheet for a week,\" you have more time than the panic suggests.",
            },
        ],
        severity: [
            "How many people use it, and could they do their jobs without it this week?",
            "Does it hold data belonging to anyone outside your company?",
            "Are credentials stored in the code or in a proper secret store?",
            "Has anyone ever restored it from a backup, successfully?",
        ],
        outcome:
            "Cleaning up AI-built software that became load-bearing is now a category of its own, and it is most of what a rescue diagnostic finds. The usual outcome is not a rewrite — it is a short list of things that are genuinely unsafe, a longer list that is merely untidy, and a clear view of which is which.",
    },
];

export function getRescueTriggerBySlug(slug: string): RescueTrigger | undefined {
    return rescueTriggers.find((t) => t.slug === slug);
}

export function getAllRescueTriggerSlugs(): string[] {
    return rescueTriggers.map((t) => t.slug);
}
