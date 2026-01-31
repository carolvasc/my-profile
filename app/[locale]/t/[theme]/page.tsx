import type { Metadata } from "next";
import type { Language } from "../../../../data/i18n";
import { getDictionary } from "../../../../data/i18n";
import ClassicHome from "../../../../themes/classic/Home";
import MinimalistHome from "../../../../themes/minimalist/Home";
import type { ThemeId } from "../../../../themes/types";

type ThemeHomeProps = {
  params: Promise<{
    locale: Language;
    theme: ThemeId;
  }>;
};

export async function generateMetadata({
  params,
}: ThemeHomeProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.homeTitle,
    description: dictionary.meta.homeDescription,
  };
}

export default async function ThemeHome({ params }: ThemeHomeProps) {
  const { locale, theme } = await params;
  const dictionary = getDictionary(locale);

  if (theme === "minimalist") {
    return <MinimalistHome dictionary={dictionary} locale={locale} theme={theme} />;
  }

  return <ClassicHome dictionary={dictionary} locale={locale} theme={theme} />;
}
