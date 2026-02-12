import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLanguage } from "../../../../data/i18n";
import ClassicHome from "../../../../themes/classic/Home";
import MinimalistHome from "../../../../themes/minimalist/Home";
import { isTheme } from "../../../../themes/registry";

type ThemeHomeProps = {
  params: Promise<{
    locale: string;
    theme: string;
  }>;
};

export async function generateMetadata({
  params,
}: ThemeHomeProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale = isLanguage(routeLocale) ? routeLocale : "pt";
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.homeTitle,
    description: dictionary.meta.homeDescription,
  };
}

export default async function ThemeHome({ params }: ThemeHomeProps) {
  const { locale, theme } = await params;

  if (!isLanguage(locale) || !isTheme(theme)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  if (theme === "minimalist") {
    return <MinimalistHome dictionary={dictionary} locale={locale} theme={theme} />;
  }

  return <ClassicHome dictionary={dictionary} locale={locale} theme={theme} />;
}
