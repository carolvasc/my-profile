import type { Dictionary, Language } from "./types";
import { en } from "./en";
import { pt } from "./pt";

export const languages: Language[] = ["pt", "en"];

const dictionaries: Record<Language, Dictionary> = {
  pt,
  en,
};

export const getDictionary = (lang: Language): Dictionary =>
  dictionaries[lang] ?? pt;

export const isLanguage = (value: string): value is Language =>
  languages.includes(value as Language);

export type { Dictionary, Language };
