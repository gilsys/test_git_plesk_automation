export const languages = {
    en: 'English',
    es: 'Español',
    ca: 'Català',
  };
  
  export const defaultLang = 'es';
  
  export const ui = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.twitter': 'Twitter',
    },
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre nosotros',
    },
    ca: {
      'nav.home': 'Inici',
      'nav.about': 'Nosaltres',
    },
  } as const;

  export const routes = {
    es: {
      '/about': '/nosotros',
      '/services/one': '/servicios/uno',
    },
    ca: {
      '/about': '/nosaltres',
      '/services/one': '/serveis/u',
    },
    en: {
      '/about': '/about',
      '/services/one': '/services/one',
    },
  }