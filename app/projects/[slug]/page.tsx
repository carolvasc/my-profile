import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Carolina Vasconcelos",
      description: "Projeto não encontrado.",
    };
  }

  return {
    title: `${project.title} | Carolina Vasconcelos`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  // SSR: dynamic route without static params keeps project details server-rendered.
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            Projeto
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--muted)]">{project.summary}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                Contexto e problema
              </h2>
              <p className="mt-4 text-sm text-[var(--muted)]">
                {project.problem}
              </p>
            </div>
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                Decisões técnicas
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {project.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                Resultados e impacto
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                Stack
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[rgba(27,27,27,0.12)] px-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                Links externos
              </h2>
              <div className="mt-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                {project.links?.repo ? (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    Repo
                  </a>
                ) : null}
                {project.links?.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    Demo
                  </a>
                ) : null}
                {!project.links?.repo && !project.links?.demo ? (
                  <span>Links privados</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
