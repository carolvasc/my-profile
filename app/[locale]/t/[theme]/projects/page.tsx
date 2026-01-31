import type { Metadata } from "next";
import type { Language } from "../../../../../data/i18n";
import { getDictionary } from "../../../../../data/i18n";
import ClassicProjects from "../../../../../themes/classic/Projects";
import MinimalistProjects from "../../../../../themes/minimalist/Projects";
import type { ThemeId } from "../../../../../themes/types";

type ThemeProjectsProps = {
  params: Promise<{
    locale: Language;
    theme: ThemeId;
  }>;
};

export async function generateMetadata({
  params,
}: ThemeProjectsProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.projectsTitle,
    description: dictionary.meta.projectsDescription,
  };
}

export default async function ThemeProjects({ params }: ThemeProjectsProps) {
  const { locale, theme } = await params;
  const dictionary = getDictionary(locale);

  if (theme === "minimalist") {
    return (
      <MinimalistProjects
        dictionary={dictionary}
        locale={locale}
        theme={theme}
      />
    );
  }

  return (
    <ClassicProjects dictionary={dictionary} locale={locale} theme={theme} />
  );
}
