import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLanguage } from "../../../../../data/i18n";
import ClassicAbout from "../../../../../themes/classic/About";
import MinimalistAbout from "../../../../../themes/minimalist/About";
import { isTheme } from "../../../../../themes/registry";

type ThemeAboutProps = {
  params: Promise<{
    locale: string;
    theme: string;
  }>;
};

export async function generateMetadata({
  params,
}: ThemeAboutProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale = isLanguage(routeLocale) ? routeLocale : "pt";
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.aboutTitle,
    description: dictionary.meta.aboutDescription,
  };
}

export default async function ThemeAbout({ params }: ThemeAboutProps) {
  const { locale, theme } = await params;

  if (!isLanguage(locale) || !isTheme(theme)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  if (theme === "minimalist") {
    return <MinimalistAbout dictionary={dictionary} />;
  }

  return <ClassicAbout dictionary={dictionary} />;
}
