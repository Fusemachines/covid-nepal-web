export interface ILanguage {
  en: string;
  np?: string;
}

export interface IMeta {
  page: number;
  size: number;
  totalItems: number;
  totalPages: number;
}

export const initialMeta: IMeta = {
  page: 0,
  size: 5,
  totalItems: 1,
  totalPages: 1
};
