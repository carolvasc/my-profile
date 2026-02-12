import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLanguage } from "../../../../../data/i18n";
import ClassicContact from "../../../../../themes/classic/Contact";
import MinimalistContact from "../../../../../themes/minimalist/Contact";
import { isTheme } from "../../../../../themes/registry";

type ThemeContactProps = {
  params: Promise<{
    locale: string;
    theme: string;
  }>;
};

export async function generateMetadata({
  params,
}: ThemeContactProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale = isLanguage(routeLocale) ? routeLocale : "pt";
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.contactTitle,
    description: dictionary.meta.contactDescription,
  };
}

export default async function ThemeContact({ params }: ThemeContactProps) {
  const { locale, theme } = await params;

  if (!isLanguage(locale) || !isTheme(theme)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  if (theme === "minimalist") {
    return <MinimalistContact dictionary={dictionary} />;
  }

  return <ClassicContact dictionary={dictionary} />;
}
