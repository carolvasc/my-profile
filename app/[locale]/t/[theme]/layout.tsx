import { notFound } from "next/navigation";
import { getDictionary, isLanguage, languages } from "../../../../data/i18n";
import ClassicLayout from "../../../../themes/classic/Layout";
import MinimalistLayout from "../../../../themes/minimalist/Layout";
import { isTheme, themes } from "../../../../themes/registry";

type ThemeLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
    theme: string;
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

  if (!isLanguage(locale) || !isTheme(theme)) {
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
