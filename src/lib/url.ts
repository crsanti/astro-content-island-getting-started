const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBaseUrl = (path: string): string =>
  `${base}/${path.replace(/^\//, "")}`;
