export type Language = "pt" | "en";

export type Dictionary = {
  lang: Language;
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  header: {
    toggleLabel: string;
    navLabel: string;
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
  };
  labels: {
    repo: string;
    demo: string;
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
