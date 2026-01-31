import type { Dictionary } from "./types";

export const en: Dictionary = {
  lang: "en",
  identity: {
    name: "Carolina Vasconcelos de Souza",
    role: "Senior Software Engineer",
    location: "São Paulo, Brazil",
    summary:
      "Based in São Paulo, with experience in front-end, back-end, and digital product architecture. I focus on performance, WCAG AA accessibility, and data-informed technical decisions.",
    email: "carol.vasconcelos080@gmail.com",
    phone: "11 95802-3724",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  header: {
    toggleLabel: "Language",
    navLabel: "Main navigation",
    themeLabel: "Theme",
    themeClassic: "Classic",
    themeMinimalist: "Minimalist",
    languagePt: "PT",
    languageEn: "EN",
  },
  accessibility: {
    skipToContent: "Skip to main content",
  },
  footer: {
    title: "Let's talk?",
    emailLabel: "Direct email",
  },
  home: {
    eyebrow: "Senior Software Engineer",
    title: "Carolina Vasconcelos de Souza",
    summary:
      "Based in São Paulo, with experience in front-end, back-end, and digital product architecture. I focus on performance, WCAG AA accessibility, and data-informed technical decisions.",
    ctaProjects: "View projects",
    ctaContact: "Contact",
    stackTitle: "Core stack",
    stackDescription:
      "Technologies used in projects focused on scalability and observability.",
  },
  about: {
    eyebrow: "About",
    title: "Professional context and technical focus",
    intro1:
      "Senior Software Engineer with experience in TOTVS digital products, working on HR and talent management solutions. My work combines performance, accessibility, and architectural decisions that sustain long-term growth.",
    intro2:
      "I have a track record of optimizing critical MongoDB searches, improving application conversion, and implementing scalable UI standards documented in Storybook.",
    expertiseTitle: "Areas of expertise",
    waysTitle: "Ways of working",
    onlineTitle: "Online presence",
    expertise: [
      "Front-end with Angular, React, and TypeScript",
      "Back-end with .NET (C#), DDD, CQRS, and clean architecture",
      "MySQL and MongoDB databases",
      "Observability with Datadog and Sentry",
      "Microservices with asynchronous communication via RabbitMQ",
      "Digital accessibility with WCAG AA compliance",
      "Automated E2E and API testing with Cypress, plus TDD with Jest and xUnit",
      "CI/CD with Azure DevOps, Docker, and Kubernetes",
      "Design systems and documentation with Storybook",
      "Cloud computing with GCP and AWS",
    ],
    ways: [
      "Close collaboration with UX and Design to build accessible, reusable components.",
      "Technical and behavioral mentoring to grow junior developers.",
      "Code reviews focused on quality, standardization, and shared learning.",
      "Internal technical training on front-end, Gitflow, UX, and accessibility.",
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Proven impact in digital products",
    intro:
      "I selected initiatives that highlight my work in performance, accessibility, and standardized experiences. Each project details technical decisions and outcomes.",
    cardEyebrow: "Project",
    detailsLink: "View details",
    privateLinks: "Private links",
  },
  projectDetail: {
    eyebrow: "Project",
    problemTitle: "Context and problem",
    decisionsTitle: "Technical decisions",
    resultsTitle: "Results and impact",
    stackTitle: "Stack",
    linksTitle: "External links",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about technical challenges?",
    intro:
      "I am open to opportunities involving architecture, performance, and accessible digital experiences. Send a message so we can align on goals and next steps.",
    emailLabel: "Direct email",
  },
  labels: {
    repo: "Repo",
    demo: "Demo",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  stack: {
    angular: "Angular",
    react: "React",
    typescript: "TypeScript",
    dotnet: ".NET (C#)",
    node: "Node.js",
    mongodb: "MongoDB",
    mysql: "MySQL",
    rabbitmq: "RabbitMQ",
    cypress: "Cypress",
    docker: "Docker",
    kubernetes: "Kubernetes",
    cloud: "GCP/AWS",
    datadog: "Datadog",
    sentry: "Sentry",
    storybook: "Storybook",
    wcag: "WCAG AA",
    cicd: "CI/CD",
  },
  minimalist: {
    heroGreeting: "Hello! I'm",
    biographyTitle: "Biography",
    educationTitle: "Education",
    experienceTitle: "Experience",
    professionalTitle: "Professionality",
    sidebarBio:
      "I focus on performance, WCAG AA accessibility, and scalable architecture for digital products.",
  },
  education: {
    item1: {
      school: "UNINOVE",
      degree: "BSc in Computer Science",
      period: "02/2015 – 12/2018",
      description: "BSc in Computer Science.",
    },
  },
  experience: {
    item1: {
      company: "TOTVS",
      role: "Senior Development Analyst",
      period: "07/2023 – Present",
      description:
        "Optimized critical MongoDB searches and improved application flows with conversion impact.",
    },
    item2: {
      company: "TOTVS",
      role: "Mid-level Development Analyst",
      period: "07/2020 – 07/2023",
      description:
        "Improved import/export routines and refactored screens to enhance usability.",
    },
    item3: {
      company: "Grupo KRS",
      role: "Junior Front-end Developer",
      period: "09/2018 – 06/2020",
      description: "Junior Front-end Developer.",
    },
  },
  skills: {
    accessibility: "WCAG AA accessibility",
    designSystems: "Design systems with Storybook",
    angularReact: "Angular, React, and TypeScript",
    dotnet: ".NET (C#) with DDD and CQRS",
    mongodbMysql: "MongoDB and MySQL",
    observability: "Observability with Datadog and Sentry",
    tests: "E2E testing and TDD",
    cicd: "CI/CD with Azure DevOps",
    cloud: "GCP and AWS",
    microservices: "Microservices with RabbitMQ",
  },
  project: {
    mongodb: {
      title: "Faster critical searches in Talent Attraction",
      summary:
        "Restructured MongoDB queries and indexes to reduce response time in job and application flows.",
      problem:
        "Screening and application flows suffered from slow critical searches, impacting recruiters and candidates.",
      decisions: [
        "Mapped the most used queries to identify performance bottlenecks.",
        "Created compound and text indexes aligned to search patterns.",
        "Monitored impact with metrics and continuous observability.",
      ],
      results: [
        "Reduced response time in job and application flows.",
        "Smoother screening experience for recruiters.",
        "Foundation prepared for growth with better scalability.",
      ],
    },
    designSystem: {
      title: "Accessible and reusable design system",
      summary:
        "Standardized components with WCAG AA and Storybook documentation to accelerate onboarding and reduce rework.",
      problem:
        "Inconsistent components and missing documentation slowed UI scalability and onboarding.",
      decisions: [
        "Defined accessibility guidelines and shared UI standards.",
        "Documented more than 40 components in Storybook.",
        "Integrated quality checks into the pipeline.",
      ],
      results: [
        "Reduced code duplication and increased UI reuse.",
        "Faster onboarding for new developers.",
        "Accessibility compliance applied across multiple products.",
      ],
    },
  },
  meta: {
    homeTitle: "Carolina Vasconcelos | Senior Software Engineer",
    homeDescription:
      "Senior Software Engineer in São Paulo focused on performance, accessibility, and scalable architecture.",
    aboutTitle: "About | Carolina Vasconcelos",
    aboutDescription:
      "Professional experience, areas of expertise, and ways of working of Carolina Vasconcelos.",
    projectsTitle: "Projects | Carolina Vasconcelos",
    projectsDescription:
      "Selected projects focused on performance, accessibility, and scalable architecture.",
    contactTitle: "Contact | Carolina Vasconcelos",
    contactDescription:
      "Contact Carolina Vasconcelos for opportunities and conversations about software engineering.",
    projectNotFoundTitle: "Project not found | Carolina Vasconcelos",
    projectNotFoundDescription: "Project not found.",
  },
};
