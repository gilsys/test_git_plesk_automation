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
    'language.change_to': 'Cambiar idioma a',
    'language.es': 'Español',
    'language.ca': 'Catalán',
    'language.en': 'Inglés',
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
    'contact.title': 'Enviar un mensaje',
    'contact.subtitle': 'Rellena el formulario para enviarnos un mensaje:',
    'contact.name': 'Nombre completo',
    'contact.company': 'Empresa',
    'contact.phone': 'Teléfono',
    'contact.email': 'E-mail',
    'contact.subject': 'Asunto',
    'contact.comments': 'Comentarios',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.disclaimer': 'Acepto las <a href="%terms%" target="_blank" class="underline">condiciones de uso</a> y la <a href="%privacy_policy%" target="_blank" class="underline">política de privacidad</a>.',
    'contact.success': 'Mensaje enviado correctamente.',
    'contact.error': 'Error al enviar el mensaje.',
    'menu.more_info': 'Más información',
  },
  ca: {
    'common.page': 'Pàgina',
    'language.change_to': 'Canviar idioma a',
    'language.es': 'Espanyol',
    'language.ca': 'Català',
    'language.en': 'Anglès',
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
    'contact.title': 'Enviar un missatge',
    'contact.subtitle': 'Omple el formulari per a enviar-nos un missatge:',
    'contact.name': 'Nom complet',
    'contact.company': 'Empresa',
    'contact.phone': 'Telèfon',
    'contact.email': 'E-mail',
    'contact.subject': 'Assumpte',
    'contact.comments': 'Comentaris',
    'contact.message': 'Missatge',
    'contact.send': 'Enviar',
    'contact.disclaimer': 'Accepto les <a href="%terms%" target="_blank" class="underline">condicions d\'ús</a> i la <a href="%privacy_policy%" target="_blank" class="underline">política de privacitat</a>.',
    'contact.success': 'Missatge enviat correctament.',
    'contact.error': 'Error al enviar el missatge.',
    'menu.more_info': 'Més informació',
  },
  en: {
    'common.page': 'Page',
    'language.change_to': 'Change language to',
    'language.es': 'Spanish',
    'language.ca': 'Catalan',
    'language.en': 'English',
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
    'contact.title': 'Send a message',
    'contact.subtitle': 'Fill out the form to send us a message:',
    'contact.name': 'Full name',
    'contact.company': 'Company',
    'contact.phone': 'Phone',
    'contact.email': 'E-mail',
    'contact.subject': 'Subject',
    'contact.comments': 'Comments',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.disclaimer': 'I accept the <a href="%terms%" target="_blank" class="underline">terms of use</a> and the <a href="%privacy_policy%" target="_blank" class="underline">privacy policy</a>.',
    'contact.success': 'Message sent successfully.',    
    'contact.error': 'Error sending the message.',
    'menu.more_info': 'More information',
  },
} as const;

export const routes = {
  ca: {
    'home': '/ca',
    'gilsys': '/ca/sobre-nosaltres',
       'kit-digital/basic-internet-presence': '/ca/kit-digital/presencia-basica-internet',
    'kit-digital/basic-internet-presence': '/ca/kit-digital/presencia-basica-internet',
    'kit-digital': '/ca/kit-digital',
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
    'kit-consulting': '/ca/kit-consulting',
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
    
    
    'consultory': '/ca/consultoria-tecnologica',
    'migration': '/ca/migracio-integracio',
    'development': '/ca/programacio-a-mida',
    'development/web': '/ca/programacio-a-mida/aplicacions-web',
    'development/apps': '/ca/programacio-a-mida/apps',
    'development/automation': '/ca/programacio-a-mida/automatitzacio-processos',
    'development/ia': '/ca/programacio-a-mida/ia-barcelona',
    'development/astro': '/ca/programacio-a-mida/webs-alt-rendiment',

    'software': '/ca/software-personalitzat',
    
    
    'software/ecommerce': '/ca/software-personalitzat/programacio-woocommerce-prestashop',
    'software/metabase': '/ca/software-personalitzat/metabase-business-intelligence',
    'software/pimcore': '/ca/software-personalitzat/pimcore-barcelona',
    'software/crm': '/ca/software-personalitzat/programa-gestio-clients',
    'software/wp': '/ca/software-personalitzat/web-wordpress',

    'about': '/ca/sobre-nosaltres',
    

    'contact': '/ca/contactar',
    'blog': '/ca/blog',
    'terms': '/ca/avis-legal',
    'privacy-policy': '/ca/politica-privacitat',
  },
  es: {
    'home': '/es',
    'kit-digital/web': '/es/kit-digital/presencia-basica-internet',
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
    'kit-consulting/ai': '/es/kit-consulting/servicio-de-asesoramiento-en-inteligencia-artificial',
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
   
      'consultory': '/ca/consultoria-tecnologica',
    'migration': '/ca/migracio-integracio',
    'development': '/ca/programacio-a-mida',
    'development/web': '/ca/programacio-a-mida/aplicacions-web',
    'development/apps': '/ca/programacio-a-mida/apps',
    'development/automation': '/ca/programacio-a-mida/automatitzacio-processos',
    'development/ia': '/ca/programacio-a-mida/ia-barcelona',
    'development/astro': '/ca/programacio-a-mida/webs-alt-rendiment',

    'software': '/ca/software-personalitzat',
    'software/ecommerce': '/ca/software-personalitzat/disseny-botiga-online',
    'software/metabase': '/ca/software-personalitzat/metabase-analisis-empresarial',
    'software/pimcore': '/ca/software-personalitzat/pimcore-barcelona',
    'software/crm': '/ca/software-personalitzat/programa-gestio-clients',
    'software/wp': '/ca/software-personalitzat/web-wordpress',

    'about': '/ca/sobre-nosaltres',
    

    'contact': '/es/contactar',
    'blog': '/es/blog',
    'terms': '/ca/avis-legal',
    'privacy-policy': '/ca/politica-privacitat',
  },
  en: {
    'home': '/en',
    
    'consultory': '/ca/consultoria-tecnologica',
    'migration': '/ca/migracio-integracio',
    'development': '/ca/programacio-a-mida',
    'development/web': '/ca/programacio-a-mida/aplicacions-web',
    'development/apps': '/ca/programacio-a-mida/apps',
    'development/automation': '/ca/programacio-a-mida/automatitzacio-processos',
    'development/ia': '/ca/programacio-a-mida/ia-barcelona',
    'development/astro': '/ca/programacio-a-mida/webs-alt-rendiment',

    'software': '/ca/software-personalitzat',
    'software/ecommerce': '/ca/software-personalitzat/disseny-botiga-online',
    'software/metabase': '/ca/software-personalitzat/metabase-analisis-empresarial',
    'software/pimcore': '/ca/software-personalitzat/pimcore-barcelona',
    'software/crm': '/ca/software-personalitzat/programa-gestio-clients',
    'software/wp': '/ca/software-personalitzat/web-wordpress',

    'about': '/ca/sobre-nosaltres',
    

    'contact': '/en/contact',
    'blog': '/en/blog',
    'terms': '/ca/avis-legal',
    'privacy-policy': '/ca/politica-privacitat',
    
  },
};

export const header = {
  ca: {
    links: [
      {
        _id: 'home',
        text: 'Inici',
        href: routes['ca']['home'],
      },
      {
        _id: 'gilsys',
        text: 'gilsys',
        href: routes['ca']['gilsys'],
      },
      {
        _id: 'kit-digital',
        text: 'Kit Digital',
        title: 'Més informació del Kit Digital',
        href: routes['ca']['kit-digital'],

        links: [
          {
            text: 'Lloc web i presència bàsica a Internet',
            href: routes['ca']['kit-digital/web'],
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
        _id: 'kit-consulting',
        text: 'Kit Consulting',
        title: 'Més informació del Kit Consulting',
        href: routes['ca']['kit-consulting'],

        links: [
          {
            text: 'Assessorament en Intel·ligència Artificial',
            href: routes['ca']['kit-consulting/ai'],
          },
          {
            text: 'Assessorament en anàlisi de dades (Bàsic)',
            href: routes['ca']['kit-consulting/basic-data-analysis'],
          },
          {
            text: 'Assessorament en anàlisi de dades (Avançat)',
            href: routes['ca']['kit-consulting/advanced-data-analysis'],
          },
          {
            text: 'Assessorament en vendes digitals',
            href: routes['ca']['kit-consulting/digital-sales-advisory'],
          },
          {
            text: 'Assessorament en processos de negoci o procés de producció',
            href: routes['ca']['kit-consulting/business-process-advisory'],
          },
          {
            text: 'Assessorament en estratègia i rendiment de negoci',
            href: routes['ca']['kit-consulting/business-strategy-advisory'],
          },
          {
            text: 'Assessorament “360” en transformació digital',
            href: routes['ca']['kit-consulting/360-digital-transformation'],
          },
        ],
      },
      {
        _id: 'services',
        text: 'Serveis',
        links: [
          {
            _id: 'development',
            text: 'Programació a mida',
            title: 'Més informació de programació a mida',
            href: routes['ca']['development'],

            links: [
              {
                href: routes['ca']['development/web'],
                title: "Programació d'aplicacions web a mida i plataformes online",
                text: 'Aplicacions web',
                icon: 'tabler:code',
              },
              {
                href: routes['ca']['development/apps'],
                title: "Programació a mida d'apps multiplataforma",
                text: 'Aplicacions per mòbils',
                icon: 'tabler:device-mobile',
              },
              {
                href: routes['ca']['development/ia'],
                title: "Desenvolupament d'eines d'IA a mida",
                text: "Intel·ligència Artificial",
                icon: 'tabler:cpu',
              },
              {
                href: routes['ca']['development/astro'],
                title: 'Disseny de pàgines web ultra-ràpides',
                text: "Webs d'alt rendiment",
                icon: 'tabler:world',
              },
              
              {
                href: routes['ca']['development/automation'],
                title: "Programació de processos automàtics i APIs a mida",
                text: "Automatitzacions i APIs",
                icon: 'tabler:settings-automation',
              },
            ],
          },
          {
            _id: 'software',
            text: 'Software personalitzat',
            title: 'Més informació de software personalitzat',
            href: routes['ca']['software'],
            links: [
              {
                href: routes['ca']['software/wp'],
                title: 'Programació i disseny a mida de pàgines web',
                text: 'Webs en WordPress',
                icon: 'tabler:brand-wordpress',
              },
              {
                href: routes['ca']['software/pimcore'],
                title: 'Implantem Pimcore per centralitzar la gestió de productes.',
                text: 'Gestors de productes',
                icon: 'tabler:database',
              },
              {
                href: routes['ca']['software/metabase'],
                title: 'Utilitzem Metabase com a eina de Business Intelligence',
                text: 'Anàlisi empresarial',
                icon: 'tabler:chart-bar',
              },
              {
                href: routes['ca']['software/ecommerce'],
                title: 'Dissenyem portals e-commerce amb Prestashop i Woocommerce.',
                text: 'Botiga online',
                icon: 'tabler:shopping-cart',
              },
              {
                href: routes['ca']['software/crm'],
                title: 'Software CRM personalitzat',
                text: 'Gestió de clients',
                icon: 'tabler:user-circle',
              },
            ]
          },
          {
            _id: 'migration',
            text: 'Migració i integració',
            title: 'Més informació de migració i integració',
            href: routes['ca']['migration'],  
            links: [
              {
                href: routes['ca']['migration'] + '#',
                title: "Migrem bases de dades antigues a noves aplicacions sense perdre informació.",
                text: "Migració de dades",
                icon: 'tabler:arrows-transfer-down',
              },
              {
                href: routes['ca']['migration'] + '#',
                title: 'Integració d\'intel·ligència artificial en empreses',
                text: "Integració d'IA",
                icon: 'tabler:brain',
              },
              {
                href: routes['ca']['migration'] + '#',
                title: "Sincronització d'informació entre programes",
                text: 'Connexió de software',
                icon: 'tabler:link',
              },
              {
                href: routes['ca']['migration'] + '#',
                title: 'Anàlisi de codi i millora de rendiment de programes',
                text: 'Optimitació de software',
                icon: 'tabler:chart-line',
              },
              {
                href: routes['ca']['migration'] + '#',
                title: 'Separació de plataformes en mòduls escalables',
                text: 'Divisió i escalabilitat',
                icon: 'tabler:sitemap',
              },
            ],         
          },
          {
            _id: 'consultory',
            text: 'Consultoria TIC',
            title: 'Més informació de consultoria TIC',
            href: routes['ca']['consultory'],
            links: [
              {
                href: routes['ca']['consultory'] + '#',
                title: "Estudi de les eines actuals i propostes d'optimització",
                text: 'Anàlisi de situació tecnològica',
                icon: 'tabler:clipboard-list',
              },          
              {
                href: routes['ca']['consultory'] + '#',
                title: 'Recollida de requisits i elaboració de propostes',
                text: 'Trasformació d\'idees a projectes',
                icon: 'tabler:clipboard-text',
              },          
              {
                href:routes['ca']['consultory'] + '#',
                title: 'Estudi per optimitzar estructura i qualitat de la informació',
                text: 'Anàlisi i organtizació de dades',
                icon: 'tabler:table',
              },          
              {
                href: routes['ca']['consultory'] + '#',
                title: "Avaluació i proposta de noves eines i serveis",
                text: 'Identificació de solucions',
                icon: 'tabler:bulb',
              },
              {
                href: routes['ca']['consultory'] + '#',
                title: 'Com implantar intel·ligència artificial a l\'empresa',
                text: 'Estudi per integració d\'IA',
                icon: 'tabler:robot',
              },
            ],
          },
        ],
      },
      {
        _id: 'contact',
        text: 'Contactar',
        href: routes['ca']['contact'],
      },
      {
        _id: 'blog',
        text: 'Blog',
        href: routes['ca']['blog'],
      },
    ],
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
      {
        _id: 'blog',
        text: 'Blog',
        href: routes['es']['blog'],
      },
    ],
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
      {
        _id: 'contact',
        text: 'Contact',
        href: routes['en']['contact'],
      },
      {
        _id: 'blog',
        text: 'Blog',
        href: routes['en']['blog'],
      },
    ],
  },
};

export const footer = {
  ca: {
    links: [
      header['ca']['links'].find((link) => link._id === 'services').links.find((link) => link._id === 'development'),
      header['ca']['links'].find((link) => link._id === 'services').links.find((link) => link._id === 'software'),
      header['ca']['links'].find((link) => link._id === 'services').links.find((link) => link._id === 'migration'),
      header['ca']['links'].find((link) => link._id === 'services').links.find((link) => link._id === 'consultory')
    ],
    secondaryLinks: [
      { text: 'Avís legal', href: '#' },
      { text: 'Política de privacitat', href: '#'},
      { text: 'Política de cookies', href: '#'},
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    ],
    address: `            
            <a href="tel:+34665331271">665 33 12 71</a><br>
            <a class='text-accent' href="mailto:info@gilsys.com">info@gilsys.com</a><br><br>            
            <a href='https://maps.app.goo.gl/V5T7Ksystbsv68eD7' rel='nofollow' target='_blank' title='Obrir google maps'>Passeig del Ter 48<br>
            08580, Sant Quirze de Besora<br>
            Osona - Barcelona</a><br/>
    `,
    footNote: `gilsys · Tots els drets reservats.`,
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
      { text: 'Avís legal', href: '#' },
      { text: 'Política de privacitat', href: '#' },
      { text: 'Política de cookies', href: '#' },
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
