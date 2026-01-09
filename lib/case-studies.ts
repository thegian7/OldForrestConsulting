export interface CaseStudy {
    slug: string;
    client: string;
    role: string;
    subtitle: string;
    problem: string;
    solution: string;
    outcome: string;
    overview: string[];
    highlights: { value: string; label: string }[];
    techStack: {
        category: string;
        items: string[];
    }[];
    skills: string[];
    keyFeatures: {
        title: string;
        items: string[];
    }[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "edify-platform",
        client: "Edify Platform",
        role: "Fractional CTO",
        subtitle: "Full-Stack Multi-Vendor Marketplace with Stripe Connect",
        problem:
            "Multi-vendor marketplace needed Stripe Connect integration with 80/20 revenue splits, mobile app, and 500+ athlete profiles.",
        solution:
            "Built full-stack platform: Node.js/TypeScript backend, React Native mobile app, WordPress storefronts, and automated commission tracking.",
        outcome:
            "500+ active profiles, 36+ database tables, zero-downtime deploys with PM2 clustering.",
        overview: [
            "Developed a comprehensive marketplace platform enabling athletes to monetize their personal brands through merchandise, trading cards, and subscriptions. The platform serves 500+ active profiles across web and mobile applications with real revenue processing.",
            "Implemented Stripe Connect for multi-party payments with configurable platform fees (80% to athletes, 20% platform), automated commission tracking, and webhook-driven payment reconciliation.",
        ],
        highlights: [
            { value: "500+", label: "Active Profiles" },
            { value: "80/20", label: "Revenue Split" },
            { value: "36+", label: "Database Tables" },
        ],
        techStack: [
            { category: "Backend", items: ["Node.js", "TypeScript", "Express", "Fastify"] },
            { category: "Frontend", items: ["React", "React Native", "Expo", "Tailwind CSS"] },
            { category: "Database", items: ["PostgreSQL", "Supabase"] },
            { category: "Payments", items: ["Stripe Connect", "Webhooks"] },
            { category: "Infrastructure", items: ["Docker", "PM2", "GitLab CI/CD"] },
        ],
        skills: [
            "Node.js",
            "TypeScript",
            "React",
            "React Native",
            "PostgreSQL",
            "Stripe Connect",
            "Multi-tenant",
            "RBAC",
            "REST API",
            "WordPress",
        ],
        keyFeatures: [
            {
                title: "Multi-Tenant Architecture",
                items: [
                    "Role-based access control (RBAC)",
                    "Row-level security policies",
                    "Organization-scoped data isolation",
                    "JWT authentication with refresh tokens",
                ],
            },
            {
                title: "Payment System",
                items: [
                    "Multi-party payments with platform fees",
                    "Configurable revenue splits",
                    "Automated commission tracking and reconciliation",
                    "Webhook-driven payment status updates",
                    "Subscription management with recurring billing",
                ],
            },
        ],
    },
    {
        slug: "paperless-ai-system",
        client: "Paperless AI System",
        role: "AI Engineer",
        subtitle: "Three-Layer AI Document Management with Multi-OCR & Semantic Search",
        problem:
            "10 years of documents with useless search—OCR couldn't handle poor scans, no semantic understanding.",
        solution:
            "Three-layer AI system: multi-provider OCR (GPT-4 Vision, Google Document AI, Ollama), LLM auto-tagging, ChromaDB vector search.",
        outcome:
            "3,000+ documents auto-organized, 90%+ OCR accuracy, semantic search in <1s.",
        overview: [
            "Built a comprehensive AI system on top of paperless-ngx combining intelligent OCR, auto-classification, and semantic search. The system processes 3,000+ documents automatically with zero manual tagging.",
            "Three integrated services work together: paperless-gpt (Go) for multi-provider OCR with worker pool and LLM-powered auto-tagging, paperless-chroma (Python) for ChromaDB vector database with semantic search, and paperless-ngx for core document storage and UI.",
        ],
        highlights: [
            { value: "3,000+", label: "Documents Auto-Organized" },
            { value: "90%+", label: "OCR Accuracy" },
            { value: "<1s", label: "Semantic Search" },
            { value: "0", label: "Manual Tagging" },
        ],
        techStack: [
            { category: "Backend", items: ["Go", "Python", "Flask"] },
            { category: "Frontend", items: ["React"] },
            { category: "AI/ML", items: ["GPT-4 Vision", "Google Document AI", "Ollama", "Sentence Transformers"] },
            { category: "Database", items: ["ChromaDB", "PostgreSQL"] },
            { category: "Infrastructure", items: ["Docker", "Docker Compose"] },
        ],
        skills: [
            "Go",
            "Python",
            "GPT-4 Vision",
            "Google Document AI",
            "Ollama",
            "ChromaDB",
            "Sentence Transformers",
            "Docker",
            "LLM Integration",
        ],
        keyFeatures: [
            {
                title: "Intelligent OCR Layer",
                items: [
                    "Multi-provider OCR routing (GPT-4 Vision, Google Document AI, Ollama)",
                    "Worker pool with 4 concurrent processors",
                    "90%+ accuracy on poor-quality scans",
                    "Automatic provider selection based on document type",
                ],
            },
            {
                title: "Auto-Classification",
                items: [
                    "LLM-powered title generation",
                    "Automatic tag assignment",
                    "Correspondent identification",
                    "Document date extraction",
                ],
            },
            {
                title: "Semantic Search",
                items: [
                    "ChromaDB vector database",
                    "BAAI/bge-base-en-v1.5 embeddings",
                    "Document chunking (1000 chars, 200 overlap)",
                    "Concept-based search (\"car accident\" finds insurance claims)",
                ],
            },
        ],
    },
    {
        slug: "whatsappmeta",
        client: "WhatsAppMeta",
        role: "Lead Engineer",
        subtitle: "Twilio SMS Webhook System with Job Queue & Session Management",
        problem:
            "Needed production-grade messaging automation with webhook handling, session management, and job queuing.",
        solution:
            "Twilio webhook system with 4-worker job pool, state machines, cross-conversation sessions, and real-time admin dashboard.",
        outcome:
            "27 test files, enterprise-ready architecture for WhatsApp Business API patterns.",
        overview: [
            "Built a production-grade messaging automation system using Twilio webhooks and Node.js/Express. The system routes incoming messages to appropriate handlers, manages user sessions across conversations, and processes jobs through a worker pool with real-time status tracking.",
            "The architecture maps directly to WhatsApp Business API integration patterns—same webhook model, session management, and job routing. This makes it ideal for service marketplaces and chatbot systems.",
        ],
        highlights: [
            { value: "4", label: "Worker Pool" },
            { value: "27", label: "Test Files" },
            { value: "5s", label: "Poll Interval" },
        ],
        techStack: [
            { category: "Backend", items: ["Node.js", "Express.js", "TypeScript"] },
            { category: "Database", items: ["SQLite", "PostgreSQL"] },
            { category: "Messaging", items: ["Twilio API"] },
            { category: "Testing", items: ["Jest"] },
            { category: "Logging", items: ["Winston"] },
        ],
        skills: [
            "Node.js",
            "Express.js",
            "Twilio API",
            "PostgreSQL",
            "Webhook Architecture",
            "Job Queues",
            "State Machines",
            "REST API",
            "Authentication",
        ],
        keyFeatures: [
            {
                title: "Webhook Architecture",
                items: [
                    "Twilio signature validation for security",
                    "Express middleware for request parsing",
                    "Phone number whitelist authentication",
                    "Rate limiting to prevent abuse",
                ],
            },
            {
                title: "Job Queue System",
                items: [
                    "Worker pool with 4 concurrent workers",
                    "5-second polling interval",
                    "State machine: pending → running → completed/failed",
                    "Database-backed job persistence",
                ],
            },
            {
                title: "Session Management",
                items: [
                    "Cross-conversation session tracking",
                    "Pagination for long responses",
                    "Session timeout handling",
                    "Context preservation across messages",
                ],
            },
        ],
    },
    {
        slug: "edifymobile",
        client: "EdifyMobile",
        role: "Mobile Developer",
        subtitle: "Cross-Platform Trading Card App with Image Capture & Cloud Storage",
        problem:
            "Cross-platform app needed for custom trading card design with camera capture and print fulfillment.",
        solution:
            "React Native/Expo app with Fabric.js canvas editor, ImageKit CDN, Stripe payments, and Printful integration.",
        outcome:
            "Single codebase for iOS/Android with native camera, haptics, and push notifications.",
        overview: [
            "Built a cross-platform mobile application for designing and purchasing custom trading cards. Users can upload photos, customize card designs using a canvas-based editor, and purchase physical cards through integrated print-on-demand fulfillment.",
            "Single codebase serving iOS and Android with native-quality performance and features including camera, haptics, and push notifications.",
        ],
        highlights: [
            { value: "2", label: "Platforms (iOS/Android)" },
            { value: "1", label: "Codebase" },
            { value: "60fps", label: "Performance" },
        ],
        techStack: [
            { category: "Framework", items: ["React Native", "Expo SDK"] },
            { category: "Language", items: ["TypeScript"] },
            { category: "State", items: ["Zustand", "TanStack Query"] },
            { category: "Design", items: ["Fabric.js (Canvas)"] },
            { category: "Storage", items: ["ImageKit CDN"] },
            { category: "Payments", items: ["Stripe"] },
            { category: "Notifications", items: ["OneSignal"] },
        ],
        skills: [
            "React Native",
            "Expo",
            "TypeScript",
            "Camera Integration",
            "Image Upload",
            "Cloud Storage",
            "Stripe",
            "Push Notifications",
            "Canvas/Fabric.js",
        ],
        keyFeatures: [
            {
                title: "Image Handling Pipeline",
                items: [
                    "Camera capture with permission handling",
                    "Client-side image compression",
                    "Secure upload to cloud storage",
                    "CDN delivery with responsive sizing",
                    "Caching strategy for offline access",
                ],
            },
            {
                title: "Canvas-Based Design Tool",
                items: [
                    "Fabric.js integration for object manipulation",
                    "Pre-built card templates",
                    "Text overlay with custom fonts",
                    "Image positioning and scaling",
                    "Real-time preview rendering",
                ],
            },
            {
                title: "Mobile-Specific Features",
                items: [
                    "Haptic feedback for interactions",
                    "Safe area handling for notches",
                    "Gesture support (swipe, pinch, pan)",
                    "Offline mode with local persistence",
                    "Deep linking from notifications/URLs",
                ],
            },
        ],
    },
    {
        slug: "wingbeat",
        client: "WingBeat",
        role: "Game Developer",
        subtitle: "Browser-Based Rhythm Game with Real-Time Audio Analysis",
        problem:
            "Browser-based rhythm game needed real-time audio analysis and procedural obstacle generation.",
        solution:
            "Phaser 3 game with Web Audio API FFT processing, 7 frequency bands, beat detection, and object pooling for 60 FPS.",
        outcome:
            "Sub-50ms beat detection, procedural generation from any audio, WebGL rendering.",
        overview: [
            "Created a rhythm-action game that generates obstacles in real-time based on audio frequency analysis. The game uses Web Audio API with FFT processing to detect beats and create synchronized gameplay elements, delivering 60 FPS performance through optimized rendering techniques.",
            "The same patterns (continuous data stream → processing → real-time display) apply to dashboards, monitoring systems, IoT applications, and any system requiring live data visualization with high performance.",
        ],
        highlights: [
            { value: "60", label: "FPS Target" },
            { value: "7", label: "Frequency Bands" },
            { value: "<50ms", label: "Beat Detection" },
        ],
        techStack: [
            { category: "Framework", items: ["Phaser 3"] },
            { category: "Language", items: ["TypeScript"] },
            { category: "Audio", items: ["Web Audio API", "FFT"] },
            { category: "Build", items: ["Vite", "Webpack"] },
            { category: "Backend", items: ["Supabase (leaderboards)"] },
        ],
        skills: [
            "Phaser 3",
            "TypeScript",
            "Web Audio API",
            "FFT Analysis",
            "Canvas Rendering",
            "Game Development",
            "Performance Optimization",
            "Procedural Generation",
        ],
        keyFeatures: [
            {
                title: "Real-Time Audio Analysis",
                items: [
                    "Web Audio API with AnalyserNode",
                    "FFT frequency decomposition",
                    "7 logarithmic frequency bands",
                    "Energy-based beat detection algorithm",
                    "Sub-50ms detection latency",
                ],
            },
            {
                title: "Procedural Generation",
                items: [
                    "Dynamic obstacle generation from audio",
                    "Parametric curves using Bezier mathematics",
                    "Difficulty scaling based on song intensity",
                    "No pre-authored content required",
                ],
            },
            {
                title: "Performance Optimization",
                items: [
                    "Object pooling to prevent GC pauses",
                    "Visibility culling for off-screen objects",
                    "Efficient sprite batching",
                    "Frame-rate independent physics",
                ],
            },
        ],
    },
    {
        slug: "paperless-gpt",
        client: "Paperless-GPT",
        role: "AI Engineer",
        subtitle: "AI-Powered Document Analysis with Vector Search & LLM Integration",
        problem:
            "Document intelligence system needed semantic search and natural language queries against document collections.",
        solution:
            "RAG pipeline with sentence transformer embeddings, ChromaDB vectors, and multi-provider LLM support (OpenAI, Ollama).",
        outcome:
            "Concept-based search finds related docs instantly—\"car accident\" returns insurance claims, repair estimates.",
        overview: [
            "Developed an intelligent document processing system that automatically analyzes, categorizes, and extracts information from uploaded documents using AI. The system uses vector embeddings for semantic search and LLM integration for natural language queries against document collections.",
            "Natural language queries like \"What were last month's expenses?\" return relevant documents instantly using semantic similarity rather than keyword matching.",
        ],
        highlights: [
            { value: "RAG", label: "Architecture" },
            { value: "3+", label: "LLM Providers" },
            { value: "<1s", label: "Query Response" },
        ],
        techStack: [
            { category: "Language", items: ["Python"] },
            { category: "Vector DB", items: ["ChromaDB"] },
            { category: "Embeddings", items: ["Sentence Transformers"] },
            { category: "LLM", items: ["OpenAI API", "Ollama"] },
            { category: "API", items: ["FastAPI", "Flask"] },
            { category: "Deployment", items: ["Docker"] },
        ],
        skills: [
            "Python",
            "ChromaDB",
            "Vector Databases",
            "OpenAI API",
            "LLM Integration",
            "Semantic Search",
            "Document Processing",
            "REST API",
            "Docker",
        ],
        keyFeatures: [
            {
                title: "Document Processing",
                items: [
                    "PDF, image, and text document support",
                    "OCR for scanned documents",
                    "Automatic text extraction",
                    "Metadata extraction (dates, amounts, entities)",
                ],
            },
            {
                title: "Vector Search",
                items: [
                    "Sentence transformer embeddings",
                    "ChromaDB for vector storage",
                    "Semantic similarity search",
                    "Hybrid search (vector + keyword)",
                ],
            },
            {
                title: "LLM Integration",
                items: [
                    "OpenAI API (GPT-4) support",
                    "Local models via Ollama",
                    "Context-aware responses",
                    "Source document citations",
                ],
            },
        ],
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
    return caseStudies.map((study) => study.slug);
}
