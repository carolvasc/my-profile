import type { Dictionary } from "../data/i18n";

export const getByKey = (dictionary: Dictionary, key: string): string => {
  const parts = key.split(".");
  let current: unknown = dictionary;

  for (const part of parts) {
    if (current === undefined || current === null) {
      return "";
    }
    const index = Number(part);
    if (Number.isInteger(index) && Array.isArray(current)) {
      current = current[index];
    } else if (typeof current === "object" && current !== null) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return "";
    }
  }

  return typeof current === "string" ? current : "";
};
