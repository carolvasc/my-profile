import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Language } from "../../../../../../data/i18n";
import { getDictionary } from "../../../../../../data/i18n";
import { getProjectBySlug } from "../../../../../../data/projects";
import { getByKey } from "../../../../../../lib/i18n";
import ClassicProjectDetail from "../../../../../../themes/classic/ProjectDetail";
import MinimalistProjectDetail from "../../../../../../themes/minimalist/ProjectDetail";
import type { ThemeId } from "../../../../../../themes/types";

type ThemeProjectProps = {
  params: Promise<{
    locale: Language;
    theme: ThemeId;
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: ThemeProjectProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const dictionary = getDictionary(locale);
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: dictionary.meta.projectNotFoundTitle,
      description: dictionary.meta.projectNotFoundDescription,
    };
  }

  return {
    title: `${getByKey(dictionary, project.titleKey)} | ${dictionary.identity.name}`,
    description: getByKey(dictionary, project.summaryKey),
  };
}

export default async function ThemeProject({ params }: ThemeProjectProps) {
  const { locale, theme, slug } = await params;
  const dictionary = getDictionary(locale);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (theme === "minimalist") {
    return <MinimalistProjectDetail dictionary={dictionary} project={project} />;
  }

  return (
    <ClassicProjectDetail dictionary={dictionary} project={project} />
  );
}
