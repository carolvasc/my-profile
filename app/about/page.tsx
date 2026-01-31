import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Carolina Vasconcelos",
  description:
    "Experiência profissional, áreas de especialidade e forma de trabalho de Carolina Vasconcelos.",
};

const expertise = [
  "Front-end com Angular, React e TypeScript",
  "Back-end com .NET (C#), DDD, CQRS e arquitetura limpa",
  "Banco de dados MySQL e MongoDB",
  "Observabilidade com Datadog e Sentry",
  "Microserviços com comunicação assíncrona via RabbitMQ",
  "Acessibilidade digital com conformidade WCAG AA",
  "Testes automatizados E2E e APIs com Cypress, além de TDD com Jest e xUnit",
  "CI/CD com Azure DevOps, Docker e Kubernetes",
  "Design systems e documentação com Storybook",
  "Computação em nuvem com GCP e AWS",
];

const waysOfWorking = [
  "Atuação próxima a UX e Design para criar componentes acessíveis e reutilizáveis.",
  "Mentoria técnica e comportamental para crescimento de desenvolvedores juniores.",
  "Revisões de código focadas em qualidade, padronização e aprendizado coletivo.",
  "Treinamentos técnicos internos sobre front-end, Gitflow, UX e acessibilidade.",
];

export default function AboutPage() {
  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-12">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            Sobre
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Contexto profissional e foco técnico
          </h1>
          <p className="text-lg text-[var(--muted)]">
            Engenheira de Software Sênior com experiência em produtos digitais
            da TOTVS, atuando em soluções de RH e gestão de talentos. Minha
            atuação combina performance, acessibilidade e decisões arquiteturais
            que sustentam crescimento de longo prazo.
          </p>
          <p className="text-lg text-[var(--muted)]">
            Tenho histórico de otimização de buscas críticas em MongoDB,
            melhoria da conversão de candidaturas e implementação de padrões de
            UI escaláveis com documentação em Storybook.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-2xl text-[var(--ink)]">
              Áreas de especialidade
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              {expertise.map((item) => (
                <li key={item} className="border-b border-dashed border-[rgba(27,27,27,0.12)] pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                Forma de trabalhar
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                {waysOfWorking.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                Presença online
              </h2>
              <div className="mt-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em]">
                <a
                  href="https://github.com/"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
