export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  problem: string;
  decisions: string[];
  results: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "buscas-rapidas-mongodb",
    title: "Buscas críticas mais rápidas no RH Atração de Talentos",
    summary:
      "Reestruturação de consultas e índices no MongoDB para reduzir o tempo de resposta em fluxos de vagas e candidaturas.",
    stack: ["MongoDB", "Node.js", "Angular", "Datadog", "Sentry"],
    problem:
      "Fluxos de triagem e candidatura tinham lentidão em buscas críticas, afetando a experiência de recrutadores e candidatos.",
    decisions: [
      "Mapear consultas mais usadas e identificar gargalos de performance.",
      "Criar índices compostos e textuais alinhados aos padrões de busca.",
      "Monitorar impacto com métricas e observabilidade contínua.",
    ],
    results: [
      "Redução do tempo de resposta nos fluxos de vagas e candidaturas.",
      "Experiência de triagem mais fluida para recrutadores.",
      "Base preparada para crescimento com melhor escalabilidade.",
    ],
  },
  {
    slug: "design-system-acessibilidade",
    title: "Design system acessível e reutilizável",
    summary:
      "Padronização de componentes com WCAG AA e documentação em Storybook para acelerar o onboarding e reduzir retrabalho.",
    stack: ["Angular", "Storybook", "TypeScript", "WCAG AA", "CI/CD"],
    problem:
      "Componentes inconsistentes e falta de documentação dificultavam a escalabilidade da UI e o onboarding.",
    decisions: [
      "Definir guidelines de acessibilidade e padrões de UI compartilhados.",
      "Documentar mais de 40 componentes no Storybook.",
      "Integrar validações de qualidade no pipeline.",
    ],
    results: [
      "Redução de duplicação de código e maior reutilização de UI.",
      "Onboarding acelerado para novos desenvolvedores.",
      "Conformidade de acessibilidade aplicada em múltiplos produtos.",
    ],
  },
];
