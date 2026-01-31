import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, type Language } from "../../../../data/i18n";
import { getLocalizedProject, getProjectBySlug } from "../../../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    lang: Language;
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const dictionary = getDictionary(lang);
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: dictionary.meta.projectNotFoundTitle,
      description: dictionary.meta.projectNotFoundDescription,
    };
  }

  const localizedProject = getLocalizedProject(project, lang);

  return {
    title: `${localizedProject.title} | Carolina Vasconcelos`,
    description: localizedProject.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  // SSR: dynamic route without static params keeps project details server-rendered.
  const { lang, slug } = await params;
  const project = getProjectBySlug(slug);
  const dictionary = getDictionary(lang);

  if (!project) {
    notFound();
  }

  const localizedProject = getLocalizedProject(project, lang);

  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            {dictionary.projectDetail.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {localizedProject.title}
          </h1>
          <p className="text-lg text-[var(--muted)]">
            {localizedProject.summary}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.problemTitle}
              </h2>
              <p className="mt-4 text-sm text-[var(--muted)]">
                {localizedProject.problem}
              </p>
            </div>
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.decisionsTitle}
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {localizedProject.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.resultsTitle}
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {localizedProject.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.projectDetail.stackTitle}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
                {localizedProject.stack.map((item) => (
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
                {dictionary.projectDetail.linksTitle}
              </h2>
              <div className="mt-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                {localizedProject.links?.repo ? (
                  <a
                    href={localizedProject.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    {dictionary.labels.repo}
                  </a>
                ) : null}
                {localizedProject.links?.demo ? (
                  <a
                    href={localizedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    {dictionary.labels.demo}
                  </a>
                ) : null}
                {!localizedProject.links?.repo &&
                !localizedProject.links?.demo ? (
                  <span>{dictionary.projects.privateLinks}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
