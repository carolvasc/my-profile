import Link from "next/link";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-6 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Projeto
          </p>
          <h2 className="font-display text-2xl text-[var(--ink)]">
            {project.title}
          </h2>
          <p className="text-sm text-[var(--muted)]">{project.summary}</p>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
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
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          Ver detalhes
        </Link>
        {project.links?.repo || project.links?.demo ? (
          <div className="flex gap-3">
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
          </div>
        ) : (
          <span className="text-[var(--muted)]">Links privados</span>
        )}
      </div>
    </article>
  );
}
