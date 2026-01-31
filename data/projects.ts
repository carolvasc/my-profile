import type { Language } from "./i18n";

type Localized<T> = {
  pt: T;
  en: T;
};

export type Project = {
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;
  stack: string[];
  problem: Localized<string>;
  decisions: Localized<string[]>;
  results: Localized<string[]>;
  links?: {
    repo?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "buscas-rapidas-mongodb",
    title: {
      pt: "Buscas críticas mais rápidas no RH Atração de Talentos",
      en: "Faster critical searches in Talent Attraction",
    },
    summary: {
      pt: "Reestruturação de consultas e índices no MongoDB para reduzir o tempo de resposta em fluxos de vagas e candidaturas.",
      en: "Restructured MongoDB queries and indexes to reduce response time in job and application flows.",
    },
    stack: ["MongoDB", "Node.js", "Angular", "Datadog", "Sentry"],
    problem: {
      pt: "Fluxos de triagem e candidatura tinham lentidão em buscas críticas, afetando a experiência de recrutadores e candidatos.",
      en: "Screening and application flows suffered from slow critical searches, impacting recruiters and candidates.",
    },
    decisions: {
      pt: [
        "Mapear consultas mais usadas e identificar gargalos de performance.",
        "Criar índices compostos e textuais alinhados aos padrões de busca.",
        "Monitorar impacto com métricas e observabilidade contínua.",
      ],
      en: [
        "Mapped the most used queries to identify performance bottlenecks.",
        "Created compound and text indexes aligned to search patterns.",
        "Monitored impact with metrics and continuous observability.",
      ],
    },
    results: {
      pt: [
        "Redução do tempo de resposta nos fluxos de vagas e candidaturas.",
        "Experiência de triagem mais fluida para recrutadores.",
        "Base preparada para crescimento com melhor escalabilidade.",
      ],
      en: [
        "Reduced response time in job and application flows.",
        "Smoother screening experience for recruiters.",
        "Foundation prepared for growth with better scalability.",
      ],
    },
  },
  {
    slug: "design-system-acessibilidade",
    title: {
      pt: "Design system acessível e reutilizável",
      en: "Accessible and reusable design system",
    },
    summary: {
      pt: "Padronização de componentes com WCAG AA e documentação em Storybook para acelerar o onboarding e reduzir retrabalho.",
      en: "Standardized components with WCAG AA and Storybook documentation to accelerate onboarding and reduce rework.",
    },
    stack: ["Angular", "Storybook", "TypeScript", "WCAG AA", "CI/CD"],
    problem: {
      pt: "Componentes inconsistentes e falta de documentação dificultavam a escalabilidade da UI e o onboarding.",
      en: "Inconsistent components and missing documentation slowed UI scalability and onboarding.",
    },
    decisions: {
      pt: [
        "Definir guidelines de acessibilidade e padrões de UI compartilhados.",
        "Documentar mais de 40 componentes no Storybook.",
        "Integrar validações de qualidade no pipeline.",
      ],
      en: [
        "Defined accessibility guidelines and shared UI standards.",
        "Documented more than 40 components in Storybook.",
        "Integrated quality checks into the pipeline.",
      ],
    },
    results: {
      pt: [
        "Redução de duplicação de código e maior reutilização de UI.",
        "Onboarding acelerado para novos desenvolvedores.",
        "Conformidade de acessibilidade aplicada em múltiplos produtos.",
      ],
      en: [
        "Reduced code duplication and increased UI reuse.",
        "Faster onboarding for new developers.",
        "Accessibility compliance applied across multiple products.",
      ],
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getLocalizedProject = (project: Project, lang: Language) => ({
  slug: project.slug,
  title: project.title[lang],
  summary: project.summary[lang],
  stack: project.stack,
  problem: project.problem[lang],
  decisions: project.decisions[lang],
  results: project.results[lang],
  links: project.links,
});
