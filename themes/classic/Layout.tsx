import type { Dictionary, Language } from "../../data/i18n";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import type { ThemeId } from "../types";

type ClassicLayoutProps = {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Language;
  theme: ThemeId;
};

export default function ClassicLayout({
  children,
  dictionary,
  locale,
  theme,
}: ClassicLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header lang={locale} dictionary={dictionary} theme={theme} />
      <main className="flex-1">{children}</main>
      <Footer dictionary={dictionary} />
    </div>
  );
}
