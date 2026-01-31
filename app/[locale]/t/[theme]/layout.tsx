import { notFound } from "next/navigation";
import type { Language } from "../../../../data/i18n";
import { getDictionary, languages } from "../../../../data/i18n";
import ClassicLayout from "../../../../themes/classic/Layout";
import MinimalistLayout from "../../../../themes/minimalist/Layout";
import { themes } from "../../../../themes/registry";
import type { ThemeId } from "../../../../themes/types";

type ThemeLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: Language;
    theme: ThemeId;
  }>;
};

export async function generateStaticParams() {
  return languages.flatMap((locale) =>
    themes.map((theme) => ({ locale, theme }))
  );
}

export default async function ThemeLayout({
  children,
  params,
}: ThemeLayoutProps) {
  const { locale, theme } = await params;

  if (!languages.includes(locale) || !themes.includes(theme)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  if (theme === "minimalist") {
    return (
      <MinimalistLayout
        dictionary={dictionary}
        locale={locale}
        theme={theme}
      >
        {children}
      </MinimalistLayout>
    );
  }

  return (
    <ClassicLayout dictionary={dictionary} locale={locale} theme={theme}>
      {children}
    </ClassicLayout>
  );
}
