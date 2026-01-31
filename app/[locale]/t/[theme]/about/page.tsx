import type { Metadata } from "next";
import type { Language } from "../../../../../data/i18n";
import { getDictionary } from "../../../../../data/i18n";
import ClassicAbout from "../../../../../themes/classic/About";
import MinimalistAbout from "../../../../../themes/minimalist/About";
import type { ThemeId } from "../../../../../themes/types";

type ThemeAboutProps = {
  params: Promise<{
    locale: Language;
    theme: ThemeId;
  }>;
};

export async function generateMetadata({
  params,
}: ThemeAboutProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.aboutTitle,
    description: dictionary.meta.aboutDescription,
  };
}

export default async function ThemeAbout({ params }: ThemeAboutProps) {
  const { locale, theme } = await params;
  const dictionary = getDictionary(locale);

  if (theme === "minimalist") {
    return <MinimalistAbout dictionary={dictionary} />;
  }

  return <ClassicAbout dictionary={dictionary} />;
}
