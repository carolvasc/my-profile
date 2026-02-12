import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLanguage } from "../../../../../data/i18n";
import ClassicProjects from "../../../../../themes/classic/Projects";
import MinimalistProjects from "../../../../../themes/minimalist/Projects";
import { isTheme } from "../../../../../themes/registry";

type ThemeProjectsProps = {
  params: Promise<{
    locale: string;
    theme: string;
  }>;
};

export async function generateMetadata({
  params,
}: ThemeProjectsProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale = isLanguage(routeLocale) ? routeLocale : "pt";
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.projectsTitle,
    description: dictionary.meta.projectsDescription,
  };
}

export default async function ThemeProjects({ params }: ThemeProjectsProps) {
  const { locale, theme } = await params;

  if (!isLanguage(locale) || !isTheme(theme)) {
    notFound();
  }

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
