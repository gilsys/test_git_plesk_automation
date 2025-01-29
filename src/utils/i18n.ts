import { ui, defaultLang, routes, header, footer } from '../i18n/ui';

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
  return function u(key: keyof (typeof routes)[typeof defaultLang]) {
    return routes[lang][key] || routes[defaultLang][key];
  };
}

export function getHeader(lang: keyof typeof routes) {
  return header[lang];  
}

export function getFooter(lang: keyof typeof routes) {
  return footer[lang];  
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path;
    const hasTranslation = routes[l] !== undefined && routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? routes[l][pathName] : path;
    return translatedPath;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {  
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');

  if (parts.length <= 1) {
    return '';
  }

  const currentLang = getLangFromUrl(url);
  const path = '/' + parts.slice(1).join('/');
  
  const langRoutes = routes[currentLang as keyof typeof routes];
  const result = Object.keys(langRoutes).find(key => langRoutes[key] === path);
  return result;
}



// Obtiene las migas de pan basadas en una ruta
export function getBreadcrumb(lang: string, path: string) {
  const breadcrumbs = [];
  let currentPath = path;

  while (currentPath) {
    const route = Object.entries(routes[lang]).find(([, value]) => value === currentPath);

    if (route) {
      const [key, value] = route;
      breadcrumbs.unshift({
        text: key.replace(/-/g, ' '), // Nombre amigable del texto
        href: value,
      });

      // Si la ruta tiene un "padre", continuamos.
      currentPath = Object.entries(routes[lang]).find(([parentKey]) =>
        value.startsWith(routes[lang][parentKey])
      )?.[1];
    } else {
      currentPath = null;
    }
  }

  return breadcrumbs;
}