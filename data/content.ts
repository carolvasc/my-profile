export type ContentContract = {
  identity: {
    nameKey: string;
    roleKey: string;
    locationKey: string;
    summaryKey: string;
    emailKey: string;
    phoneKey: string;
  };
  links: {
    github: string;
    linkedin: string;
  };
  home: {
    eyebrowKey: string;
    titleKey: string;
    summaryKey: string;
    ctaProjectsKey: string;
    ctaContactKey: string;
    stackTitleKey: string;
    stackDescriptionKey: string;
    stackKeys: string[];
  };
  about: {
    eyebrowKey: string;
    titleKey: string;
    introKeys: string[];
    expertiseTitleKey: string;
    expertiseKeys: string[];
    waysTitleKey: string;
    waysKeys: string[];
    onlineTitleKey: string;
  };
  minimalist: {
    heroGreetingKey: string;
    heroRoleKey: string;
    biographyTitleKey: string;
    educationTitleKey: string;
    experienceTitleKey: string;
    professionalityTitleKey: string;
    sidebarBioKey: string;
    educationItems: {
      schoolKey: string;
      degreeKey: string;
      periodKey: string;
      descriptionKey: string;
    }[];
    experienceItems: {
      companyKey: string;
      roleKey: string;
      periodKey: string;
      descriptionKey: string;
    }[];
    professionalityKeys: string[];
  };
  projects: {
    sectionTitleKey: string;
    sectionIntroKey: string;
    cardEyebrowKey: string;
    detailsLabelKey: string;
    privateLinksKey: string;
    items: ProjectItem[];
  };
  contact: {
    eyebrowKey: string;
    titleKey: string;
    introKey: string;
    emailLabelKey: string;
  };
};

export type ProjectItem = {
  slug: string;
  titleKey: string;
  summaryKey: string;
  problemKey: string;
  decisionsKeys: string[];
  resultsKeys: string[];
  stackKeys: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
};

export const content: ContentContract = {
  identity: {
    nameKey: "identity.name",
    roleKey: "identity.role",
    locationKey: "identity.location",
    summaryKey: "identity.summary",
    emailKey: "identity.email",
    phoneKey: "identity.phone",
  },
  links: {
    github: "https://github.com/carolvasc",
    linkedin: "https://www.linkedin.com/in/carolina-vasconcelos",
  },
  home: {
    eyebrowKey: "home.eyebrow",
    titleKey: "home.title",
    summaryKey: "home.summary",
    ctaProjectsKey: "home.ctaProjects",
    ctaContactKey: "home.ctaContact",
    stackTitleKey: "home.stackTitle",
    stackDescriptionKey: "home.stackDescription",
    stackKeys: [
      "stack.angular",
      "stack.react",
      "stack.typescript",
      "stack.dotnet",
      "stack.node",
      "stack.mongodb",
      "stack.mysql",
      "stack.rabbitmq",
      "stack.cypress",
      "stack.docker",
      "stack.kubernetes",
      "stack.cloud",
    ],
  },
  about: {
    eyebrowKey: "about.eyebrow",
    titleKey: "about.title",
    introKeys: ["about.intro1", "about.intro2"],
    expertiseTitleKey: "about.expertiseTitle",
    expertiseKeys: [
      "about.expertise.0",
      "about.expertise.1",
      "about.expertise.2",
      "about.expertise.3",
      "about.expertise.4",
      "about.expertise.5",
      "about.expertise.6",
      "about.expertise.7",
      "about.expertise.8",
      "about.expertise.9",
    ],
    waysTitleKey: "about.waysTitle",
    waysKeys: [
      "about.ways.0",
      "about.ways.1",
      "about.ways.2",
      "about.ways.3",
    ],
    onlineTitleKey: "about.onlineTitle",
  },
  minimalist: {
    heroGreetingKey: "minimalist.heroGreeting",
    heroRoleKey: "identity.role",
    biographyTitleKey: "minimalist.biographyTitle",
    educationTitleKey: "minimalist.educationTitle",
    experienceTitleKey: "minimalist.experienceTitle",
    professionalityTitleKey: "minimalist.professionalTitle",
    sidebarBioKey: "minimalist.sidebarBio",
    educationItems: [
      {
        schoolKey: "education.item1.school",
        degreeKey: "education.item1.degree",
        periodKey: "education.item1.period",
        descriptionKey: "education.item1.description",
      },
    ],
    experienceItems: [
      {
        companyKey: "experience.item1.company",
        roleKey: "experience.item1.role",
        periodKey: "experience.item1.period",
        descriptionKey: "experience.item1.description",
      },
      {
        companyKey: "experience.item2.company",
        roleKey: "experience.item2.role",
        periodKey: "experience.item2.period",
        descriptionKey: "experience.item2.description",
      },
      {
        companyKey: "experience.item3.company",
        roleKey: "experience.item3.role",
        periodKey: "experience.item3.period",
        descriptionKey: "experience.item3.description",
      },
      {
        companyKey: "experience.item4.company",
        roleKey: "experience.item4.role",
        periodKey: "experience.item4.period",
        descriptionKey: "experience.item4.description",
      },
      {
        companyKey: "experience.item5.company",
        roleKey: "experience.item5.role",
        periodKey: "experience.item5.period",
        descriptionKey: "experience.item5.description",
      },
      {
        companyKey: "experience.item6.company",
        roleKey: "experience.item6.role",
        periodKey: "experience.item6.period",
        descriptionKey: "experience.item6.description",
      },
    ],
    professionalityKeys: [
      "skills.accessibility",
      "skills.designSystems",
      "skills.angularReact",
      "skills.dotnet",
      "skills.mongodbMysql",
      "skills.observability",
      "skills.tests",
      "skills.cicd",
      "skills.cloud",
      "skills.microservices",
    ],
  },
  projects: {
    sectionTitleKey: "projects.title",
    sectionIntroKey: "projects.intro",
    cardEyebrowKey: "projects.cardEyebrow",
    detailsLabelKey: "projects.detailsLink",
    privateLinksKey: "projects.privateLinks",
    items: [
      {
        slug: "buscas-rapidas-mongodb",
        titleKey: "project.mongodb.title",
        summaryKey: "project.mongodb.summary",
        problemKey: "project.mongodb.problem",
        decisionsKeys: [
          "project.mongodb.decisions.0",
          "project.mongodb.decisions.1",
          "project.mongodb.decisions.2",
        ],
        resultsKeys: [
          "project.mongodb.results.0",
          "project.mongodb.results.1",
          "project.mongodb.results.2",
        ],
        stackKeys: [
          "stack.mongodb",
          "stack.node",
          "stack.angular",
          "stack.datadog",
          "stack.sentry",
        ],
      },
      {
        slug: "design-system-acessibilidade",
        titleKey: "project.designSystem.title",
        summaryKey: "project.designSystem.summary",
        problemKey: "project.designSystem.problem",
        decisionsKeys: [
          "project.designSystem.decisions.0",
          "project.designSystem.decisions.1",
          "project.designSystem.decisions.2",
        ],
        resultsKeys: [
          "project.designSystem.results.0",
          "project.designSystem.results.1",
          "project.designSystem.results.2",
        ],
        stackKeys: [
          "stack.angular",
          "stack.storybook",
          "stack.typescript",
          "stack.wcag",
          "stack.cicd",
        ],
      },
    ],
  },
  contact: {
    eyebrowKey: "contact.eyebrow",
    titleKey: "contact.title",
    introKey: "contact.intro",
    emailLabelKey: "contact.emailLabel",
  },
};
