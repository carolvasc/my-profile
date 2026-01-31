import type { Metadata } from "next";
import ProjectCard from "../../../components/ProjectCard";
import { getDictionary, type Language } from "../../../data/i18n";
import { projects } from "../../../data/projects";

type ProjectsPageProps = {
  params: Promise<{
    lang: Language;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  return {
    title: dictionary.meta.projectsTitle,
    description: dictionary.meta.projectsDescription,
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-10">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            {dictionary.projects.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {dictionary.projects.title}
          </h1>
          <p className="text-lg text-[var(--muted)]">
            {dictionary.projects.intro}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              lang={lang}
              dictionary={dictionary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
