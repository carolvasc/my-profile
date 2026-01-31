import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carolina Vasconcelos | Engenheira de Software Sênior",
  description:
    "Engenheira de Software Sênior em São Paulo com foco em performance, acessibilidade e arquitetura escalável.",
};

const stack = [
  "Angular",
  "React",
  "TypeScript",
  ".NET (C#)",
  "Node.js",
  "MongoDB",
  "MySQL",
  "RabbitMQ",
  "Cypress",
  "Docker",
  "Kubernetes",
  "GCP/AWS",
];

export default function Home() {
  return (
    <section className="page-container py-20 md:py-24">
      <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            Engenheira de Software Sênior
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Carolina Vasconcelos de Souza
          </h1>
          <p className="text-lg text-[var(--muted)]">
            Profissional baseada em São Paulo, com experiência em front-end,
            back-end e arquitetura de produtos digitais. Atuo com foco em
            performance, acessibilidade WCAG AA e decisões técnicas orientadas
            por dados.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm uppercase tracking-[0.25em] text-[var(--surface)] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Ver projetos
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--ink)] px-6 py-3 text-sm uppercase tracking-[0.25em] text-[var(--ink)] transition hover:bg-[rgba(27,27,27,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Contato
            </Link>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-6 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)] backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Stack principal
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Tecnologias usadas em projetos com foco em escalabilidade e
              observabilidade.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[rgba(27,27,27,0.12)] px-3 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
