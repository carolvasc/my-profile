import type { Metadata } from "next";
import type { Language } from "../../../../../data/i18n";
import { getDictionary } from "../../../../../data/i18n";
import ClassicContact from "../../../../../themes/classic/Contact";
import MinimalistContact from "../../../../../themes/minimalist/Contact";
import type { ThemeId } from "../../../../../themes/types";

type ThemeContactProps = {
  params: Promise<{
    locale: Language;
    theme: ThemeId;
  }>;
};

export async function generateMetadata({
  params,
}: ThemeContactProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.meta.contactTitle,
    description: dictionary.meta.contactDescription,
  };
}

export default async function ThemeContact({ params }: ThemeContactProps) {
  const { locale, theme } = await params;
  const dictionary = getDictionary(locale);

  if (theme === "minimalist") {
    return <MinimalistContact dictionary={dictionary} />;
  }

  return <ClassicContact dictionary={dictionary} />;
}
