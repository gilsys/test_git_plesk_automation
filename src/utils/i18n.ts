import type { breacrumbItem, LinkItem } from '~/types';
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
    const translatedPath = hasTranslation ? routes[l][pathName] : null;
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

export function getBreadcrumb(lang: keyof typeof routes, path: string) {
  const header = getHeader(lang);
  const translatedPath = routes[lang][path];
  let result = findBreadcrumbTrail(header.links, translatedPath);

  const home = header.links[0];

  result = result ? result.filter(item => item.href && item.href !== home.href) : null;
  return result && result.length > 0 ? [{ text: home.text, href: home.href}, ...result] : null;
}

export function findBreadcrumbTrail(data: LinkItem[], targetHref: string, trail: breacrumbItem[] = []): breacrumbItem[] | null {
  for (const item of data) {
    const newTrail = [...trail, { text: item.text, href: item.href || null }];

    if (item.href === targetHref) {
      return newTrail;
    }

    if (item.links) {
      const foundTrail = findBreadcrumbTrail(item.links, targetHref, newTrail);
      if (foundTrail) {
        return foundTrail;
      }
    }
  }
  return null;
}