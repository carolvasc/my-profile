export type Language = "pt" | "en";

export type Dictionary = {
  lang: Language;
  identity: {
    name: string;
    role: string;
    location: string;
    summary: string;
    email: string;
    phone: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  header: {
    toggleLabel: string;
    navLabel: string;
    themeLabel: string;
    themeClassic: string;
    themeMinimalist: string;
    languagePt: string;
    languageEn: string;
  };
  accessibility: {
    skipToContent: string;
  };
  footer: {
    title: string;
    emailLabel: string;
  };
  home: {
    eyebrow: string;
    title: string;
    summary: string;
    ctaProjects: string;
    ctaContact: string;
    stackTitle: string;
    stackDescription: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro1: string;
    intro2: string;
    expertiseTitle: string;
    waysTitle: string;
    onlineTitle: string;
    expertise: string[];
    ways: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    cardEyebrow: string;
    detailsLink: string;
    privateLinks: string;
  };
  projectDetail: {
    eyebrow: string;
    problemTitle: string;
    decisionsTitle: string;
    resultsTitle: string;
    stackTitle: string;
    linksTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailLabel: string;
  };
  labels: {
    repo: string;
    demo: string;
    github: string;
    linkedin: string;
  };
  stack: {
    angular: string;
    react: string;
    typescript: string;
    dotnet: string;
    node: string;
    mongodb: string;
    mysql: string;
    rabbitmq: string;
    cypress: string;
    docker: string;
    kubernetes: string;
    cloud: string;
    datadog: string;
    sentry: string;
    storybook: string;
    wcag: string;
    cicd: string;
  };
  minimalist: {
    heroGreeting: string;
    biographyTitle: string;
    educationTitle: string;
    experienceTitle: string;
    professionalTitle: string;
    sidebarBio: string;
  };
  education: {
    item1: {
      school: string;
      degree: string;
      period: string;
      description: string;
    };
  };
  experience: {
    item1: {
      company: string;
      role: string;
      period: string;
      description: string;
    };
    item2: {
      company: string;
      role: string;
      period: string;
      description: string;
    };
    item3: {
      company: string;
      role: string;
      period: string;
      description: string;
    };
  };
  skills: {
    accessibility: string;
    designSystems: string;
    angularReact: string;
    dotnet: string;
    mongodbMysql: string;
    observability: string;
    tests: string;
    cicd: string;
    cloud: string;
    microservices: string;
  };
  project: {
    mongodb: {
      title: string;
      summary: string;
      problem: string;
      decisions: string[];
      results: string[];
    };
    designSystem: {
      title: string;
      summary: string;
      problem: string;
      decisions: string[];
      results: string[];
    };
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    contactTitle: string;
    contactDescription: string;
    projectNotFoundTitle: string;
    projectNotFoundDescription: string;
  };
};
