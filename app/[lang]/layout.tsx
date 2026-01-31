import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getDictionary, languages, type Language } from "../../data/i18n";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: Language;
  }>;
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!languages.includes(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header lang={lang} dictionary={dictionary} />
      <main id="conteudo-principal" className="flex-1">
        {children}
      </main>
      <Footer dictionary={dictionary} />
    </div>
  );
}
