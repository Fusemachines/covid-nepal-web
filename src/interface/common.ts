export interface ILanguage {
  en: string;
  np?: string;
}

export interface IMeta {
  size: number;
  totalItems: number;
}

export const initialMeta: IMeta = {
  size: 4,
  totalItems: 0
}