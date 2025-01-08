export const languages = {
  es: {
    label: 'Español',
    code: 'es-ES'
  },
  ca: {
    label: 'Català',
    code: 'ca-CA'
  },
  en:  {
    label: 'English',
    code: 'en-US'
  }
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'common.page': 'Página',
    'blog.back': 'Volver al blog',
    'blog.category': 'Categoría',
    'blog.tag': 'Tag',
    'blog.related_posts': 'Entradas relacionadas',
    'blog.view_all_posts': 'Ver todas las entradas',
    'blog.newer_posts': 'Entradas más recientes',
    'blog.older_posts': 'Entradas más antiguas',
    'blog.share': 'Compartir',
    'blog.reading_time': 'minutos de lectura',
    'blog.list.title': 'Blog',
    'blog.list.subtitle': 'Un ejemplo de blog generado estáticamente con noticias, tutoriales, recursos y otro contenido interesante relacionado con AstroWind',
  },
  ca: {
    'common.page': 'Pàgina',
    'blog.back': 'Tornar al blog',
    'blog.category': 'Categoria',
    'blog.tag': 'Tag',
    'blog.related_posts': 'Entrades relacionades',
    'blog.view_all_posts': 'Veure totes les entrades',
    'blog.newer_posts': 'Entrades més recents',
    'blog.older_posts': 'Entrades més antigues',
    'blog.share': 'Compartir',
    'blog.reading_time': 'minuts de lectura',
    'blog.list.title': 'The Blog',
    'blog.list.subtitle': 'Un exemple de bloc generat estàticament amb notícies, tutorials, recursos i altres continguts interessants relacionats amb AstroWind',
  },
  en: {
    'common.page': 'Page',
    'blog.back': 'Back to Blog',
    'blog.category': 'Category',
    'blog.tag': 'Tag',
    'blog.related_posts': 'Related Posts',
    'blog.view_all_posts': 'View All Posts',
    'blog.newer_posts': 'Newer posts',
    'blog.older_posts': 'Older posts',
    'blog.share': 'Share',
    'blog.reading_time': 'min read',
    'blog.list.title': 'The Blog',
    'blog.list.subtitle': 'A statically generated blog example with news, tutorials, resources and other interesting content related to AstroWind',
  },
} as const;

export const routes = {
  ca: {
    'home': '/ca',
    'gilsys': '/ca/sobre-nosaltres',
    'kit-digital/basic-internet-presence': '/ca/kit-digital/presencia-basica-internet',
    'kit-digital/e-commerce': '/ca/kit-digital/botiga-electronica',
    'kit-digital/customer-management': '/ca/kit-digital/gestio-de-clients',
    'kit-digital/process-management': '/ca/kit-digital/gestio-de-processos',
    'kit-digital/bi-analytics': '/ca/kit-digital/business-intelligence-i-analitica',
    'kit-digital/electronic-invoicing': '/ca/kit-digital/gestio-de-la-facturacio-i-factura-electronica',
    'kit-digital/cybersecurity': '/ca/kit-digital/ciberseguretat',
    'kit-digital/secure-communications': '/ca/kit-digital/comunicacions-segures',
    'kit-digital/virtual-office-tools': '/ca/kit-digital/servei-oficina-virtual',
    'kit-digital/social-media-management': '/ca/kit-digital/gestio-xarxes-socials',
    'kit-digital/advanced-internet-presence': '/ca/kit-digital/presencia-avancada-a-internet',
    'kit-digital/marketplace': '/ca/kit-digital/marketplace',
    'kit-digital/managed-cybersecurity': '/ca/kit-digital/servei-de-ciberseguretat-gestionat',
    'kit-digital/ai-customer-management': '/ca/kit-digital/gestio-de-clients-amb-ia-associada',
    'kit-digital/ai-bi-analytics': '/ca/kit-digital/business-intelligence-i-analitica-i-ia-associada',
    'kit-digital/ai-process-management': '/ca/kit-digital/gestio-processos-ia',
    'kit-digital/secure-workplace': '/ca/kit-digital/lloc-de-treball-segur',
    'kit-consulting/ai-advisory': '/ca/kit-consulting/servei-de-assessorament-en-intelligencia-artificial',
    'kit-consulting/basic-data-analysis': '/ca/kit-consulting/servei-dassessorament-en-analisi-de-dades-basic',
    'kit-consulting/advanced-data-analysis':
      'kit-consulting/servei-de-assessorament-en-analisis-de-dades-avancat',
    'kit-consulting/digital-sales-advisory': '/ca/kit-consulting/servei-de-assessorament-en-vendes-digitals',
    'kit-consulting/business-process-advisory':
      'kit-consulting/servei-de-assessorament-en-processos-de-negoci-o-proces-de-produccio',
    'kit-consulting/business-strategy-advisory':
      'kit-consulting/servei-de-assessorament-en-estrategia-i-rendiment-de-negoci',
    'kit-consulting/360-digital-transformation':
      'kit-consulting/servei-de-assessorament-360-en-transformacion-digital',
    'services/software': '/ca/serveis/software',
    'services/technology-consulting': '/ca/serveis/consultoria',
    'services/migration-integration': '/ca/serveis/migracio',
    'services/web-development': '/ca/serveis/web',
    'contact': '/ca/contactar',
  },
  es: {
    'home': '/es',
    'gilsys': '/es/sobre-nosotros',
    'kit-digital/basic-internet-presence': '/es/kit-digital/presencia-basica-internet',
    'kit-digital/e-commerce': '/es/kit-digital/comercio-electronico',
    'kit-digital/customer-management': '/es/kit-digital/gestion-de-clientes',
    'kit-digital/process-management': '/es/kit-digital/gestion-de-procesos',
    'kit-digital/bi-analytics': '/es/kit-digital/business-intelligence-y-analitica',
    'kit-digital/electronic-invoicing': '/es/kit-digital/factura-electronica',
    'kit-digital/cybersecurity': '/es/kit-digital/ciberseguridad',
    'kit-digital/secure-communications': '/es/kit-digital/comunicaciones-seguras',
    'kit-digital/virtual-office-tools': '/es/kit-digital/servicios-oficina-virtual',
    'kit-digital/social-media-management': '/es/kit-digital/gestion-redes-sociales',
    'kit-digital/advanced-internet-presence': '/es/kit-digital/presencia-avanzada-en-internet',
    'kit-digital/marketplace': '/es/kit-digital/marketplace',
    'kit-digital/managed-cybersecurity': '/es/kit-digital/servicio-de-ciberseguridad-gestionada',
    'kit-digital/ai-customer-management': '/es/kit-digital/gestion-de-clientes-con-ia-asociada',
    'kit-digital/ai-bi-analytics': '/es/kit-digital/business-intelligence-y-analitica-e-ia-asociada',
    'kit-digital/ai-process-management': '/es/kit-digital/gestion-procesos-ia',
    'kit-digital/secure-workplace': '/es/kit-digital/puesto-de-trabajo-seguro',
    'kit-consulting/ai-advisory': '/es/kit-consulting/servicio-de-asesoramiento-en-inteligencia-artificial',
    'kit-consulting/basic-data-analysis': '/es/kit-consulting/servicio-de-asesoramiento-en-analisis-de-datos-basico',
    'kit-consulting/advanced-data-analysis':
      'kit-consulting/servicio-de-asesoramiento-en-analisis-de-datos-avanzado',
    'kit-consulting/digital-sales-advisory': '/es/kit-consulting/servicio-de-asesoramiento-en-ventas-digitales',
    'kit-consulting/business-process-advisory':
      'kit-consulting/servicio-de-asesoramiento-en-procesos-de-negocio-o-proceso-de-produccion',
    'kit-consulting/business-strategy-advisory':
      'kit-consulting/servicio-de-asesoramiento-en-estrategia-y-rendimiento-de-negocio',
    'kit-consulting/360-digital-transformation':
      'kit-consulting/servicio-de-asesoramiento-360-en-transformacion-digital',
    'services/software': '/es/servicios/software-apps',
    'services/technology-consulting': '/es/servicios/consultoria-tecnologica',
    'services/migration-integration': '/es/servicios/migracion-integracion',
    'services/web-development': '/es/servicios/desarrollo-web',
    'contact': '/es/contactar',
  },
  en: {
    'home': '/en',
    'gilsys': '/en/about-us',
    'services/software': '/en/services/software-and-app-programming/software-programming',
    'services/technology-consulting': '/en/services/technology-consulting',
    'services/migration-integration': '/en/services/migration-and-integration',
    'services/web-development': '/en/services/web-development',
    'contact': '/en/contact',
  },
};

export const header = {
  ca: {
    links: [
      {
        text: 'Inici',
        href: routes['ca']['home'],
      },
      {
        text: 'gilsys',
        href: routes['ca']['gilsys'],
      },
      {
        text: 'Kit Digital',
        links: [
          {
            text: 'Lloc web i presència bàsica a Internet',
            href: routes['ca']['kit-digital/basic-internet-presence'],
          },
          {
            text: 'Comerç electrònic',
            href: routes['ca']['kit-digital/e-commerce'],
          },
          {
            text: 'Gestió de clients',
            href: routes['ca']['kit-digital/customer-management'],
          },
          {
            text: 'Gestió de processos',
            href: routes['ca']['kit-digital/process-management'],
          },
          {
            text: 'Business Intelligence i Analítica',
            href: routes['ca']['kit-digital/bi-analytics'],
          },
          {
            text: 'Gestió de la facturació i factura electrònica',
            href: routes['ca']['kit-digital/electronic-invoicing'],
          },
          {
            text: 'Ciberseguretat',
            href: routes['ca']['kit-digital/cybersecurity'],
          },
          {
            text: 'Comunicacions segures',
            href: routes['ca']['kit-digital/secure-communications'],
          },
          {
            text: 'Serveis i eines d’oficina virtual',
            href: routes['ca']['kit-digital/virtual-office-tools'],
          },
          {
            text: 'Gestió de xarxes socials',
            href: routes['ca']['kit-digital/social-media-management'],
          },
          {
            text: 'Presència avançada a Internet',
            href: routes['ca']['kit-digital/advanced-internet-presence'],
          },
          {
            text: 'Marketplace',
            href: routes['ca']['kit-digital/marketplace'],
          },
          {
            text: 'Servei de Ciberseguretat Gestionada',
            href: routes['ca']['kit-digital/managed-cybersecurity'],
          },
          {
            text: 'Gestió de clients amb IA associada',
            href: routes['ca']['kit-digital/ai-customer-management'],
          },
          {
            text: 'Business Intelligence i Analítica i IA associada',
            href: routes['ca']['kit-digital/ai-bi-analytics'],
          },
          {
            text: 'Gestió de processos amb IA associada',
            href: routes['ca']['kit-digital/ai-process-management'],
          },
          {
            text: 'Lloc de treball segur',
            href: routes['ca']['kit-digital/secure-workplace'],
          },
        ],
      },
      {
        text: 'Kit Consulting',
        links: [
          {
            text: 'Servei d’assessorament en Intel·ligència Artificial',
            href: routes['ca']['kit-consulting/ai-advisory'],
          },
          {
            text: 'Servei d’assessorament en anàlisi de dades (Bàsic)',
            href: routes['ca']['kit-consulting/basic-data-analysis'],
          },
          {
            text: 'Servei d’assessorament en anàlisi de dades (Avançat)',
            href: routes['ca']['kit-consulting/advanced-data-analysis'],
          },
          {
            text: 'Servei d’assessorament en vendes digitals',
            href: routes['ca']['kit-consulting/digital-sales-advisory'],
          },
          {
            text: 'Servei d’assessorament en processos de negoci o procés de producció',
            href: routes['ca']['kit-consulting/business-process-advisory'],
          },
          {
            text: 'Servei d’assessorament en estratègia i rendiment de negoci',
            href: routes['ca']['kit-consulting/business-strategy-advisory'],
          },
          {
            text: 'Servei d’assessorament “360” en transformació digital',
            href: routes['ca']['kit-consulting/360-digital-transformation'],
          },
        ],
      },
      {
        text: 'Serveis',
        links: [
          {
            text: 'Software i app’s',
            href: routes['ca']['services/software'],
          },
          {
            text: 'Consultoria tecnològica',
            href: routes['ca']['services/technology-consulting'],
          },
          {
            text: 'Migració i integració',
            href: routes['ca']['services/migration-integration'],
          },
          {
            text: 'Desenvolupament web',
            href: routes['ca']['services/web-development'],
          },
        ],
      },
      {
        text: 'Contactar',
        href: routes['ca']['contact'],
      },
    ],

    actions: [{ text: 'Español', href: 'https://github.com/onwidget/astrowind', target: '_self' }],
  },
  es: {
    links: [
      {
        text: 'Inicio',
        href: routes['es']['home'],
      },
      {
        text: 'gilsys',
        href: routes['es']['gilsys'],
      },
      {
        text: 'Kit Digital',
        links: [
          {
            text: 'Sitio Web y presencia básica en Internet',
            href: routes['es']['kit-digital/basic-internet-presence'],
          },
          {
            text: 'Comercio electrónico',
            href: routes['es']['kit-digital/e-commerce'],
          },
          {
            text: 'Gestión de clientes',
            href: routes['es']['kit-digital/customer-management'],
          },
          {
            text: 'Gestión de procesos',
            href: routes['es']['kit-digital/process-management'],
          },
          {
            text: 'Business Intelligence y Analítica',
            href: routes['es']['kit-digital/bi-analytics'],
          },
          {
            text: 'Gestión de la facturación y factura electrónica',
            href: routes['es']['kit-digital/electronic-invoicing'],
          },
          {
            text: 'Ciberseguridad',
            href: routes['es']['kit-digital/cybersecurity'],
          },
          {
            text: 'Comunicaciones seguras',
            href: routes['es']['kit-digital/secure-communications'],
          },
          {
            text: 'Servicios y herramientas de Oficina Virtual',
            href: routes['es']['kit-digital/virtual-office-tools'],
          },
          {
            text: 'Gestión de redes sociales',
            href: routes['es']['kit-digital/social-media-management'],
          },
          {
            text: 'Presencia Avanzada en Internet',
            href: routes['es']['kit-digital/advanced-internet-presence'],
          },
          {
            text: 'Marketplace',
            href: routes['es']['kit-digital/marketplace'],
          },
          {
            text: 'Servicio de Ciberseguridad Gestionada',
            href: routes['es']['kit-digital/managed-cybersecurity'],
          },
          {
            text: 'Gestión de clientes con IA asociada',
            href: routes['es']['kit-digital/ai-customer-management'],
          },
          {
            text: 'Business Intelligence y Analítica e IA asociada',
            href: routes['es']['kit-digital/ai-bi-analytics'],
          },
          {
            text: 'Gestión de procesos con IA asociada',
            href: routes['es']['kit-digital/ai-process-management'],
          },
          {
            text: 'Puesto de trabajo seguro',
            href: routes['es']['kit-digital/secure-workplace'],
          },
        ],
      },
      {
        text: 'Kit Consulting',
        links: [
          {
            text: 'Servicio de asesoramiento en Inteligencia Artificial',
            href: routes['es']['kit-consulting/ai-advisory'],
          },
          {
            text: 'Servicio de asesoramiento en análisis de datos (Básico)',
            href: routes['es']['kit-consulting/basic-data-analysis'],
          },
          {
            text: 'Servicio de asesoramiento en análisis de datos (Avanzado)',
            href: routes['es']['kit-consulting/advanced-data-analysis'],
          },
          {
            text: 'Servicio de asesoramiento en ventas digitales',
            href: routes['es']['kit-consulting/digital-sales-advisory'],
          },
          {
            text: 'Servicio de asesoramiento en procesos de negocio o proceso de producción',
            href: routes['es']['kit-consulting/business-process-advisory'],
          },
          {
            text: 'Servicio de asesoramiento en estrategia y rendimiento de negocio',
            href: routes['es']['kit-consulting/business-strategy-advisory'],
          },
          {
            text: 'Servicio de asesoramiento “360” en transformación digital',
            href: routes['es']['kit-consulting/360-digital-transformation'],
          },
        ],
      },
      {
        text: 'Servicios',
        links: [
          {
            text: 'Software y apps',
            href: routes['es']['services/software'],
          },
          {
            text: 'Consultoría tecnológica',
            href: routes['es']['services/technology-consulting'],
          },
          {
            text: 'Migración e integración',
            href: routes['es']['services/migration-integration'],
          },
          {
            text: 'Desarrollo web',
            href: routes['es']['services/web-development'],
          },
        ],
      },
      {
        text: 'Contactar',
        href: routes['es']['contact'],
      },
    ],

    actions: [{ text: 'Español', href: 'https://github.com/onwidget/astrowind', target: '_self' }],
  },
  en: {
    links: [
      {
        text: 'Home',
        href: routes['en']['home'],
      },
      {
        text: 'gilsys',
        href: routes['en']['gilsys'],
      },
      {
        text: 'Services',
        links: [
          {
            text: 'Custom software, apps and AI',
            links: [
              {
                text: 'Software Programming',
                href: routes['en']['services/software-programming'],
              },
              {
                text: 'Mobile app development',
                href: routes['en']['services/mobile-app-development'],
              },
              {
                text: 'Product managers',
                href: routes['en']['services/product-managers'],
              },
              {
                text: 'Electronic invoicing',
                href: routes['en']['services/electronic-invoicing'],
              },
              {
                text: 'Integration into social media',
                href: routes['en']['services/integration-into-social-media'],
              },
              {
                text: 'Customer Relationship Management',
                href: routes['en']['services/customer-relationship-management'],
              },
              {
                text: 'Process management',
                href: routes['en']['services/process-management'],
              },
              {
                text: 'Cybersecurity',
                href: routes['en']['services/cybersecurity'],
              },
              {
                text: 'Secure communications',
                href: routes['en']['services/secure-communications'],
              },
              {
                text: 'Business Intelligence and Analytics',
                href: routes['en']['services/bi-analytics'],
              },
              {
                text: 'Artificial Intelligence',
                href: routes['en']['services/artificial-intelligence'],
              },
            ],
          },
        ],
      },
    ],
    actions: [{ text: 'Español', href: 'https://github.com/onwidget/astrowind', target: '_self' }],
  },
};

export const footer = {
  ca: {
    links: [
      {
        title: 'Product',
        links: [
          { text: 'Features', href: '#' },
          { text: 'Security', href: '#' },
          { text: 'Team', href: '#' },
          { text: 'Enterprise', href: '#' },
          { text: 'Customer stories', href: '#' },
          { text: 'Pricing', href: '#' },
          { text: 'Resources', href: '#' },
        ],
      },
      {
        title: 'Platform',
        links: [
          { text: 'Developer API', href: '#' },
          { text: 'Partners', href: '#' },
          { text: 'Atom', href: '#' },
          { text: 'Electron', href: '#' },
          { text: 'AstroWind Desktop', href: '#' },
        ],
      },
      {
        title: 'Support',
        links: [
          { text: 'Docs', href: '#' },
          { text: 'Community Forum', href: '#' },
          { text: 'Professional Services', href: '#' },
          { text: 'Skills', href: '#' },
          { text: 'Status', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { text: 'About', href: '#' },
          { text: 'Blog', href: '#' },
          { text: 'Careers', href: '#' },
          { text: 'Press', href: '#' },
          { text: 'Inclusion', href: '#' },
          { text: 'Social Impact', href: '#' },
          { text: 'Shop', href: '#' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Terms', href: '#' },
      { text: 'Privacy Policy', href: '#'},
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    ],
    footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
  },
  es: {
    links: [
      {
        title: 'Product',
        links: [
          { text: 'Features', href: '#' },
          { text: 'Security', href: '#' },
          { text: 'Team', href: '#' },
          { text: 'Enterprise', href: '#' },
          { text: 'Customer stories', href: '#' },
          { text: 'Pricing', href: '#' },
          { text: 'Resources', href: '#' },
        ],
      },
      {
        title: 'Platform',
        links: [
          { text: 'Developer API', href: '#' },
          { text: 'Partners', href: '#' },
          { text: 'Atom', href: '#' },
          { text: 'Electron', href: '#' },
          { text: 'AstroWind Desktop', href: '#' },
        ],
      },
      {
        title: 'Support',
        links: [
          { text: 'Docs', href: '#' },
          { text: 'Community Forum', href: '#' },
          { text: 'Professional Services', href: '#' },
          { text: 'Skills', href: '#' },
          { text: 'Status', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { text: 'About', href: '#' },
          { text: 'Blog', href: '#' },
          { text: 'Careers', href: '#' },
          { text: 'Press', href: '#' },
          { text: 'Inclusion', href: '#' },
          { text: 'Social Impact', href: '#' },
          { text: 'Shop', href: '#' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Terms', href: '#' },
      { text: 'Privacy Policy', href: '#' },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    ],
    footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
  },
  en: {
    links: [
      {
        title: 'Product',
        links: [
          { text: 'Features', href: '#' },
          { text: 'Security', href: '#' },
          { text: 'Team', href: '#' },
          { text: 'Enterprise', href: '#' },
          { text: 'Customer stories', href: '#' },
          { text: 'Pricing', href: '#' },
          { text: 'Resources', href: '#' },
        ],
      },
      {
        title: 'Platform',
        links: [
          { text: 'Developer API', href: '#' },
          { text: 'Partners', href: '#' },
          { text: 'Atom', href: '#' },
          { text: 'Electron', href: '#' },
          { text: 'AstroWind Desktop', href: '#' },
        ],
      },
      {
        title: 'Support',
        links: [
          { text: 'Docs', href: '#' },
          { text: 'Community Forum', href: '#' },
          { text: 'Professional Services', href: '#' },
          { text: 'Skills', href: '#' },
          { text: 'Status', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { text: 'About', href: '#' },
          { text: 'Blog', href: '#' },
          { text: 'Careers', href: '#' },
          { text: 'Press', href: '#' },
          { text: 'Inclusion', href: '#' },
          { text: 'Social Impact', href: '#' },
          { text: 'Shop', href: '#' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Terms', href: '#' },
      { text: 'Privacy Policy', href: '#' },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    ],
    footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
  },
};
