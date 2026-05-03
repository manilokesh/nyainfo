// Centralised content for the NyaInfo landing page.
// Edit this file to update copy without touching components.

export const site = {
  brand: {
    name: "nyainfo",
    tagline: "Full-stack engineering, end to end.",
    email: "contact@nyainfo.com",
    phone: "+91 80 4000 1234",
    address: "Bengaluru · Hyderabad · Remote-first",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Team", href: "#team" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  services: [
    {
      title: "Full-Stack Product Engineering",
      desc: "From discovery to launch — architect, design and ship production-grade web platforms with a single accountable team.",
      span: "md:col-span-7",
    },
    {
      title: "Frontend with React",
      desc: "Pixel-perfect, accessible interfaces in React — fast, typed and tested.",
      span: "md:col-span-5",
    },
    {
      title: "Backend Services",
      desc: "Python · Java · .NET. REST, GraphQL, event-driven — scaled to millions.",
      span: "md:col-span-5",
    },
    {
      title: "Data & Databases",
      desc: "MySQL · SQL Server · Oracle · MongoDB. Modelling, migrations, performance tuning.",
      span: "md:col-span-7",
    },
    {
      title: "Cloud & DevOps",
      desc: "CI/CD, IaC, observability, zero-downtime deployments on AWS, Azure & GCP.",
      span: "md:col-span-6",
    },
    {
      title: "Modernisation & Audits",
      desc: "Legacy refactors, security & performance audits, technical due diligence.",
      span: "md:col-span-6",
    },
  ],
  stack: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    middle: ["Python", "FastAPI", "Java", "Spring Boot", ".NET 8", "Node.js"],
    database: [
      "MySQL",
      "SQL Server",
      "Oracle",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
    devops: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "GitHub Actions"],
  },
  process: [
    {
      step: "01",
      title: "Discover",
      desc: "We dig into product goals, users and constraints — outputting a sharp brief and architecture sketch.",
    },
    {
      step: "02",
      title: "Design",
      desc: "UX flows, system design, data models, API contracts — reviewed and signed off before code.",
    },
    {
      step: "03",
      title: "Build",
      desc: "Two-week sprints, demoable Friday builds, transparent boards — you ship with us, not at us.",
    },
    {
      step: "04",
      title: "Launch",
      desc: "Hardening, load testing, secure go-live with monitoring, alerts and runbooks in place.",
    },
    {
      step: "05",
      title: "Scale",
      desc: "Continuous delivery, performance tuning and roadmap partnership long after v1.",
    },
  ],
  testimonials: [
    {
      quote:
        "NyaInfo replaced three vendors for us. They own the stack end-to-end and we ship 3× faster.",
      name: "Priya Menon",
      role: "VP Engineering, Brightline Health",
      avatar:
        "https://images.unsplash.com/photo-1769636929261-e913ed023c83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzcxOTQwNzd8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      quote:
        "Engineering quality is at par with our internal platform team. Code reviews, architecture, ownership — all top-notch.",
      name: "Daniel Roy",
      role: "CTO, Vault Capital",
      avatar:
        "https://images.unsplash.com/photo-1771898343647-bd979ad8cca5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzcxOTQwNzd8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      quote:
        "From a Figma to a stable production app in 11 weeks — including SOC2-friendly auth and CI/CD. Genuinely impressed.",
      name: "Aisha Khan",
      role: "Product Lead, Bloom Commerce",
      avatar:
        "https://images.pexels.com/photos/14589344/pexels-photo-14589344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      quote:
        "They migrated our Oracle workloads without a single hour of downtime. Surgical execution.",
      name: "Karthik R.",
      role: "Director of Platform, Forge Industries",
      avatar:
        "https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ],
  team: [
    {
      name: "Vijay Krishnan",
      role: "Founder & Principal Architect",
      bio: "15+ years across fintech, healthcare and SaaS. Sets the technical bar.",
      avatar: "/assets/images/avatars/02.png",
    },
    {
      name: "Lokesh",
      role: "Head of Engineering",
      bio: "Distributed systems, Java/.NET, event-driven architectures.",
      avatar: "/assets/images/avatars/01.png",
    },
    {
      name: "Iniyan",
      role: "Head of Frontend",
      bio: "Design-systems, performance & accessibility. React / Next specialist.",
      avatar: "/assets/images/avatars/03.png",
    },
    {
      name: "Sezhiyan",
      role: "Lead, Data & Cloud",
      bio: "Oracle, SQL Server, MongoDB modelling. AWS / Azure certified.",
      avatar: "/assets/images/avatars/04.png",
    },
  ],
  pricing: [
    {
      tier: "Spark",
      price: "$6,500",
      cadence: "/ project",
      blurb: "Quick discovery sprint or polished MVP for early-stage teams.",
      features: [
        "1–2 week discovery",
        "Clickable prototype",
        "Architecture & estimate",
        "1 dedicated engineer",
      ],
      highlighted: false,
      cta: "Start a Spark",
    },
    {
      tier: "Studio",
      price: "$14,900",
      cadence: "/ month",
      blurb: "A senior pod that ships your product end-to-end. Most popular.",
      features: [
        "Full-stack pod (3–5 engineers)",
        "Weekly demos & roadmap",
        "Cloud + DB + DevOps",
        "Slack-first communication",
      ],
      highlighted: true,
      cta: "Book Studio Pod",
    },
    {
      tier: "Scale",
      price: "Custom",
      cadence: "",
      blurb: "Multi-pod engagements, modernisations and platform programmes.",
      features: [
        "Multiple pods, single delivery lead",
        "SLA, security & compliance",
        "On-site workshops",
        "24/7 production support",
      ],
      highlighted: false,
      cta: "Talk to sales",
    },
  ],
  faqs: [
    {
      q: "What kinds of projects do you take on?",
      a: "We focus exclusively on full-stack web applications — SaaS products, internal tools, customer portals, dashboards and modernisations. If it has a React frontend and a Python/Java/.NET backend with a real database, it's our zone.",
    },
    {
      q: "Do you only build with React?",
      a: "On the frontend, yes — React (and Next.js) is our specialty. On the backend you can pick Python, Java or .NET; on the data layer MySQL, SQL Server, Oracle or MongoDB. We pick what fits your team and constraints, not what is trending.",
    },
    {
      q: "How do you price work?",
      a: "Discovery sprints are fixed-price. Ongoing builds are monthly retainers per pod. We are transparent about scope, velocity and what each engineer is working on every week.",
    },
    {
      q: "Where is your team based?",
      a: "Bengaluru and Hyderabad, with a remote-first culture. We work in your timezone for stand-ups and reviews.",
    },
    {
      q: "Can you work with our existing engineers?",
      a: "Absolutely. Most of our engagements are blended teams — our engineers plug into your sprints, your repos and your standards.",
    },
    {
      q: "Do you sign NDAs and DPAs?",
      a: "Yes. We routinely sign NDAs, DPAs and master services agreements before discovery starts. Reach out and we'll send templates.",
    },
  ],
  stats: [
    { value: "120+", label: "Products shipped" },
    { value: "98%", label: "Client retention" },
    { value: "11", label: "Industries served" },
    { value: "24/7", label: "Production support" },
  ],
};

export default site;
