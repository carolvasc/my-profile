import type { Metadata } from "next";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projetos | Carolina Vasconcelos",
  description:
    "Seleção de projetos com foco em performance, acessibilidade e arquitetura escalável.",
};

export default function ProjectsPage() {
  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-10">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            Projetos
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Impacto comprovado em produtos digitais
          </h1>
          <p className="text-lg text-[var(--muted)]">
            Selecionei iniciativas que mostram minha atuação em performance,
            acessibilidade e padronização de experiências. Cada projeto detalha
            decisões técnicas e resultados alcançados.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
