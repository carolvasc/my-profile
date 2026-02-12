import type { ThemeId } from "./types";

export const themes: ThemeId[] = ["classic", "minimalist"];

export const isTheme = (value: string): value is ThemeId =>
  themes.includes(value as ThemeId);

export const themeRegistry: { id: ThemeId; labelKey: string }[] = [
  { id: "classic", labelKey: "header.themeClassic" },
  { id: "minimalist", labelKey: "header.themeMinimalist" },
];
