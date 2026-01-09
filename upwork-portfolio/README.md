# Upwork Portfolio

Professional portfolio showcasing full-stack development, marketplace platforms, mobile apps, and AI integration.

---

## Portfolio Projects

### 1. [WhatsAppMeta](./01-WhatsAppMeta.html)
**Twilio SMS Webhook System with Job Queue & Session Management**

Built a production-grade messaging automation system using Twilio webhooks and Node.js/Express. The system routes incoming messages to appropriate handlers, manages user sessions across conversations, and processes jobs through a worker pool with real-time status tracking.

Features include webhook signature validation, phone whitelist authentication, job state machines (pending → running → completed), pagination for long responses, and a real-time admin dashboard.

**Skills:** Node.js, Express.js, Twilio API, PostgreSQL, Webhook Architecture, Job Queues, State Machines, REST API, Authentication

**Deliverables:**
- Twilio webhook integration with signature validation
- Job queue system with 4-worker pool
- Session management across message threads
- State machine for job status tracking
- Real-time admin dashboard
- Comprehensive test suite (27 test files)

---

### 2. [Edify Platform](./02-Edify-Platform.html)
**Full-Stack Marketplace Platform with Stripe Connect & 500+ Users**

Developed a comprehensive marketplace platform enabling athletes to monetize their personal brands through merchandise, trading cards, and subscriptions. The platform serves 500+ active profiles across web and mobile applications.

Implemented Stripe Connect for multi-party payments with configurable platform fees (80/20 splits), automated commission tracking, and webhook-driven payment reconciliation.

**Skills:** Node.js, TypeScript, React, React Native, PostgreSQL, Stripe Connect, Multi-tenant Architecture, RBAC, REST API, WordPress

**Deliverables:**
- Multi-vendor marketplace with payment splits
- Stripe Connect integration with webhook handling
- Commission tracking and payout system
- Admin dashboard for platform operations
- Mobile app (React Native/Expo)
- 500+ user profiles at scale

---

### 3. [EdifyMobile](./03-EdifyMobile.html)
**React Native Marketplace App with Image Capture & Cloud Storage**

Built a cross-platform mobile application for designing and purchasing custom trading cards. Users can upload photos, customize card designs using a canvas-based editor, and purchase physical cards through integrated print-on-demand fulfillment.

**Skills:** React Native, Expo, TypeScript, Camera Integration, Image Upload, Cloud Storage, Stripe Payments, Push Notifications, Canvas/Fabric.js

**Deliverables:**
- Cross-platform mobile app (iOS/Android)
- Camera integration for photo capture
- Canvas-based card design tool
- Cloud image storage with CDN
- Stripe payment integration
- Push notification system

---

### 4. [Paperless-GPT](./04-Paperless-GPT.html)
**Custom AI Integration for paperless-ngx Document Management**

Built custom AI services that extend **paperless-ngx** (open-source document management). My integrations add intelligent OCR, automatic classification, and semantic search capabilities that the base platform doesn't provide.

**Skills:** Python, ChromaDB, Vector Databases, OpenAI API, LLM Integration, Semantic Search, Document Processing, REST API, Docker

**Deliverables:**
- Vector database for semantic document search
- LLM integration for natural language queries
- Automatic document classification
- REST API for document operations
- Docker deployment configuration

---

### 5. [WingBeat](./05-WingBeat.html)
**Browser-Based Rhythm Game with Real-Time Audio Analysis**

Created a rhythm-action game that generates obstacles in real-time based on audio frequency analysis. Uses Web Audio API with FFT processing to detect beats and create synchronized gameplay, delivering 60 FPS performance.

**Skills:** Phaser 3, TypeScript, Web Audio API, FFT Analysis, Canvas Rendering, Game Development, Performance Optimization, Procedural Generation

**Deliverables:**
- Browser-based rhythm game
- Real-time audio frequency analysis
- Beat detection algorithm
- Procedural obstacle generation
- 60 FPS optimized rendering

---

### 6. [Paperless AI System](./06-Paperless-AI-System.html)
**Custom AI Services for paperless-ngx (Multi-OCR & Semantic Search)**

Built **two custom services** that extend paperless-ngx (open-source document management). The system processes 3,000+ documents automatically with zero manual tagging.

**What I Built vs. What I Used:**
- **paperless-gpt (Go) - MY CODE**: Multi-provider OCR (GPT-4 Vision, Google Document AI, Ollama) with worker pool and LLM-powered auto-tagging
- **paperless-chroma (Python) - MY CODE**: ChromaDB vector database with semantic search using BAAI/bge-base-en-v1.5 embeddings
- **paperless-ngx - NOT MY CODE**: Open-source base platform for document storage and UI

**Skills:** Go, Python, Flask, React, GPT-4 Vision, Google Document AI, Ollama, ChromaDB, Sentence Transformers, Docker, Docker Compose

**Deliverables:**
- Multi-provider OCR with worker pool (4 concurrent)
- LLM-powered auto-classification (titles, tags, correspondents, dates)
- Semantic search ("car accident" finds insurance claims)
- Document chunking pipeline (1000 chars, 200 overlap)
- Docker Compose orchestration for 3 services
- 90%+ OCR accuracy on poor-quality scans

---

## Quick Stats

| Metric | Value |
|--------|-------|
| Projects Documented | 50+ |
| Programming Languages | 6+ |
| Frameworks Mastered | 10+ |
| Production Users | 500+ |

---

## Core Tech Stack

**Backend:** Node.js, TypeScript, Express, Fastify, Python
**Frontend:** React, React Native, Expo, Tailwind CSS
**Databases:** PostgreSQL, Supabase, ChromaDB
**Payments:** Stripe, Stripe Connect
**Messaging:** Twilio API
**AI/ML:** OpenAI, Vector Databases, LLM Integration
**DevOps:** Docker, CI/CD, PM2

---

## How to View

Open any `.html` file in a browser, then:
- **Print to PDF:** File → Print → Save as PDF
- **Or use directly** as web-based portfolio pages

---

## Contact

Available for freelance projects. Specializing in:
- WhatsApp/messaging integrations
- Multi-vendor marketplaces
- Payment systems (Stripe Connect)
- Mobile apps (React Native)
- AI/LLM integration
