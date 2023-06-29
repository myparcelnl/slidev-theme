export const resolveAssetUrl = (url: string): string => {
  if (url.startsWith("/")) {
    return String(import.meta.env.BASE_URL) + url.slice(1);
  }

  return url;
};
