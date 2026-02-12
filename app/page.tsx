import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { languages, type Language } from "../data/i18n";
import type { ThemeId } from "../themes/types";

const getPreferredLanguage = async (): Promise<Language> => {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  if (cookieLang === "en") return "en";
  return "pt";
};

export default async function RootPage() {
  const preferredLang = await getPreferredLanguage();
  const lang = languages.includes(preferredLang) ? preferredLang : "pt";
  const cookieStore = await cookies();
  const theme =
    cookieStore.get("theme")?.value === "classic" ? "classic" : "minimalist";
  const selectedTheme = theme as ThemeId;

  redirect(`/${lang}/t/${selectedTheme}`);
}
