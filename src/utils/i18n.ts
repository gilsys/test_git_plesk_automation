import { ui, defaultLang, routes } from '../i18n/ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useRoutes(lang: keyof typeof routes) {
  return function url(key: keyof (typeof routes)[typeof defaultLang]) {
    return routes[lang][key] || routes[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path;
    const hasTranslation = routes[l] !== undefined && routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? routes[l][pathName] : path;
    return `/${l}${translatedPath}`;
  };
}

function findKeyByValue(language: string, value: string): string | undefined {
  const langRoutes = routes[language as keyof typeof routes];
  return Object.keys(langRoutes).find(key => langRoutes[key] === value);
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');

  if (parts.length <= 2) {
    return '';
  }
  
  const path = '/' + parts.slice(2).join('/');
  const currentLang = getLangFromUrl(url);

  return findKeyByValue(currentLang, path);
}

