# NyaInfo — Landing Page PRD

## Original Problem Statement
Create a landing page for an IT company **NyaInfo** that focuses purely on full-stack
applications. Tech focus — Frontend: React; Middle tier: Python, Java, .NET;
Databases: MySQL, SQL Server, Oracle, MongoDB. The page must be rich, professional,
modern and responsive, and must include a section to link to projects manually.

### User choices
- Visual style: **Bold & vibrant**, steel-blue branding (dark theme, blue-500 accent)
- Projects management: **hardcoded JSON** at `/app/frontend/src/data/projects.js`
- Contact form: **mock email send** (logs + stores submission in MongoDB)
- Sections: Hero, Services, Tech Stack, Projects, Process, Testimonials, Team, Pricing, FAQ, Contact, Footer

## Architecture
- **Frontend**: React 19 + craco + Tailwind + shadcn/ui + framer-motion + react-fast-marquee + react-icons
  - Single page: `/app/frontend/src/pages/Landing.jsx` composes section components from `src/components/sections/*`
  - Content centralised in `src/data/site.js`; projects in `src/data/projects.js` (edit to add/remove)
- **Backend**: FastAPI (`/app/backend/server.py`) with `/api` router
  - `GET /api/` health-style root, `GET /api/health`
  - `POST /api/contact` (validates name + EmailStr + message; logs mock email; stores in `contacts` collection)
  - `GET /api/contact` lists submissions
- **Database**: MongoDB (`MONGO_URL`, `DB_NAME`) — `contacts`, `status_checks`

## User Personas
- Founders / CTOs evaluating a senior full-stack vendor
- Product managers wanting to see capabilities and recent work
- Procurement / sales contacts looking for engagement models & pricing

## Core Requirements (static)
- Single-page responsive landing with smooth-scroll anchor navigation
- Manually-managed projects list (JSON file)
- Working contact form with validation, success/error toasts (mock email)
- Bold steel-blue dark theme with vibrant accents and motion
- Responsive nav with mobile hamburger menu
- All interactive elements have `data-testid`

## What's Been Implemented (2025-12-04)
- Backend: `POST /api/contact`, `GET /api/contact`, `GET /api/health` — 11/11 backend tests pass
- Frontend sections: Navbar, Hero (with stats), Services (bento), TechStack (marquee + 4 groups), Projects (6 cards from JSON), Process (5 steps), Testimonials (shadcn carousel), Team (4 members), Pricing (3 tiers, Studio highlighted), FAQ (shadcn accordion), Contact (form + info), Footer (giant NYAINFO wordmark)
- Toaster (sonner) wired for contact form feedback
- Smooth scroll, motion reveals via framer-motion
- Validated by testing agent — frontend 100%, backend 100%, no critical issues

## Backlog
- P1: Real email integration (Resend/SendGrid) for contact form when keys are provided
- P1: Lazy-load below-the-fold sections (Testimonials, Team, Pricing) for better LCP
- P2: Admin route to view contact submissions
- P2: Blog / case-studies section
- P2: Lottie / interactive 3D hero element
- P2: Light-mode toggle
- P2: SEO metadata + Open Graph image
- P3: Multi-language support
