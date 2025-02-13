import type { CookieConsentConfig } from "vanilla-cookieconsent";
import { routes } from "./i18n/ui";

// Extend the Window interface to include the dataLayer object
declare global {
    interface Window {
      dataLayer: Record<string, any>[];
      gtag: (...args: any[]) => void;
    }
  }

  function waitForGtag(callback) {
    const checkInterval = 100; // Intervalo de comprobación en milisegundos
    const maxAttempts = 50; // Número máximo de intentos (5 segundos)
  
    let attempts = 0;
    const intervalId = setInterval(() => {
      if (typeof window.gtag === 'function') {
        clearInterval(intervalId);
        callback();
      } else if (attempts >= maxAttempts) {
        clearInterval(intervalId);
        console.error("gtag not loaded.");
      }
      attempts++;
    }, checkInterval);
  }

export const config: CookieConsentConfig = {
  root: "#cc-container",
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom left",
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics</a>',
          onAccept: () => {
            console.log("ga4 accepted");
            
            waitForGtag(() => {
              console.log("ga4 granted");
          
              window.gtag("consent", "update", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
                analytics_storage: "granted",
              });
            });           
          },
          onReject: () => {
            console.log("ga4 rejected");
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        // another: {
        //   label: "Another one (dummy)",
        // },
      },
    },
  },
  language: {
    default: "en",
    //autoDetect: "browser",
    translations: {
      en: {
        consentModal: {
          title: "We value your privacy 🍪",
          description: "At Gilsys, we use essential cookies to ensure the proper functioning of our website and to enhance your browsing experience. We do not use tracking cookies for advertising or share data with third parties. You can accept all cookies or manage your preferences.",
          acceptAllBtn: "Accept",
          acceptNecessaryBtn: "Reject",
          showPreferencesBtn: "Manage preferences",
          footer: `
            <a href="${routes['en']['terms']}">Legal Notice</a>
            <a href="${routes['en']['privacy-policy']}">Privacy Policy</a>
            <a href="${routes['en']['cookie-policy']}">Cookie Policy</a>`,
        },
        preferencesModal: {
          title: "Cookie Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Use of cookies",
              description:"At Gilsys, we use essential cookies to ensure the proper functioning of the website and analytics cookies to understand how you interact with our site. This helps us improve performance and optimize your experience. These cookies may collect anonymized data such as your IP address or the type of device you use. We do not use cookies for advertising purposes or share data with third parties.",
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "These cookies are essential for the proper functioning of the website and cannot be disabled. They do not store any personally identifiable information and are used exclusively to ensure a secure and personalized experience. They include:<br><br> \
                - <strong>cc_cookie</strong>: Saves your preferences regarding cookie usage.<br> \
                - <strong>lang/strong>: Remembers your selected language to display content in your preferred language.<br><br> \
                These cookies are necessary and cannot be managed from this panel.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics Cookies",
              description:
                "These help us understand how you interact with the website through anonymous data collected by Google Tag Manager and Google Analytics.",
              linkedCategory: "analytics",
            },
            {
              title: "More information",
              description:
                'If you have any questions about our use of cookies, <a class="cc__link" href="/en/contact">contact us</a>.',
            },
          ],
        },
      },
  
      es: {
        consentModal: {
          title: "Valoramos tu privacidad 🍪",
          description:
            "En Gilsys utilizamos cookies esenciales para garantizar el correcto funcionamiento del sitio web y mejorar tu experiencia de navegación. No utilizamos rastreadores publicitarios ni compartimos datos con terceros. Puedes aceptar todas las cookies o gestionar tus preferencias.",
          acceptAllBtn: "Aceptar",
          acceptNecessaryBtn: "Rechazar",
          showPreferencesBtn: "Gestionar preferencias",
          footer: `
            <a href="${routes['es']['terms']}">Aviso legal</a>
            <a href="${routes['es']['privacy-policy']}">Política de privacidad</a>
            <a href="${routes['es']['cookie-policy']}">Política de cookies</a>`,
        },
        preferencesModal: {
          title: "Centro de preferencias de cookies",
          acceptAllBtn: "Aceptar todas",
          acceptNecessaryBtn: "Rechazar todas",
          savePreferencesBtn: "Guardar preferencias",
          closeIconLabel: "Cerrar",
          serviceCounterLabel: "Servicio|Servicios",
          sections: [
            {
              title: "Uso de cookies",
              description: "En Gilsys utilizamos cookies esenciales para garantizar el correcto funcionamiento del sitio web y cookies de análisis para entender cómo interactúas con nuestra web. Esto nos permite mejorar su rendimiento y optimizar tu experiencia. Estas cookies pueden recopilar datos anonimizados como tu dirección IP o el tipo de dispositivo que utilizas. No usamos cookies con fines publicitarios ni compartimos datos con terceros.",

            },
            {
              title:
                'Cookies técnicas necesarias <span class="pm__badge">Siempre activas</span>',
              description:
                "Estas cookies son imprescindibles para el funcionamiento del sitio web y no se pueden desactivar. No almacenan información personal identificable y se utilizan exclusivamente para garantizar una experiencia segura y personalizada. Incluyen:<br><br> \
                - <strong>cc_cookie</strong>: Guarda tus preferencias sobre el uso de cookies.<br> \
                - <strong>lang</strong>: Recuerda el idioma seleccionado para mostrar el contenido en tu idioma preferido.<br><br> \
                Estas cookies son necesarias y no pueden ser gestionadas desde este panel.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookies de análisis",
              description:
                "Nos ayudan a entender cómo interactúas con la web mediante datos anónimos recogidos por Google Tag Manager y Google Analytics.",
              linkedCategory: "analytics",
            },
            {
              title: "Más información",
              description:
                'Si tienes alguna duda sobre el uso de nuestras cookies, <a class="cc__link" href="/es/contact">contacta con nosotros</a>.',
            },
          ],
        },
      },
    
      ca: {
        consentModal: {
          title: "Valorem la teva privacitat 🍪",
          description: "A Gilsys utilitzem cookies essencials per garantir el funcionament correcte del lloc web i millorar la teva experiència de navegació. No fem servir rastrejadors publicitaris ni compartim dades amb tercers. Pots acceptar totes les cookies o gestionar les teves preferències.",
          acceptAllBtn: "Acceptar",
          acceptNecessaryBtn: "Rebutjar",
          showPreferencesBtn: "Gestionar preferències",
          footer: `
            <a href="${routes['ca']['terms']}">Avís legal</a>
            <a href="${routes['ca']['privacy-policy']}">Política de privacitat</a>
            <a href="${routes['ca']['cookie-policy']}">Política de cookies</a>`,
        },
        preferencesModal: {
          title: "Centre de preferències de cookies",
          acceptAllBtn: "Acceptar totes",
          acceptNecessaryBtn: "Rebutjar totes",
          savePreferencesBtn: "Guardar preferències",
          closeIconLabel: "Tancar",
          serviceCounterLabel: "Servei|Serveis",
          sections: [
            {
              title: "Ús de les cookies",
              description: "A Gilsys utilitzem cookies essencials per garantir el funcionament correcte del lloc web i cookies d’anàlisi per entendre com interactues amb la nostra web. Això ens permet millorar-ne el rendiment i optimitzar la teva experiència. Aquestes cookies poden recollir dades anonimitzades com la teva adreça IP o el tipus de dispositiu que utilitzes. No fem servir cookies amb finalitats publicitàries ni compartim dades amb tercers.",

            },
            {
              title:
                'Cookies tècniques necessàries <span class="pm__badge">Sempre Actives</span>',
              description:
                "Aquestes cookies són essencials per al funcionament del lloc web i no es poden desactivar. No emmagatzemen informació personal identificable i s’utilitzen exclusivament per garantir una experiència segura i personalitzada. Inclouen:<br><br> \
                - <strong>cc_cookie</strong>: Guarda les teves preferències sobre l'ús de cookies.<br> \
                - <strong>lang</strong>: Recorda l'idioma seleccionat per mostrar el contingut en la teva llengua preferida.<br><br> \
                Aquestes cookies són necessàries i no es poden gestionar des d'aquest panell.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookies d’anàlisi",
              description:
                "Ens ajuden a entendre com interactues amb la web mitjançant dades anònimes recollides per Google Tag Manager i Google Analytics.",
              linkedCategory: "analytics",
            },
            {
              title: "Més informació",
              description:
                'Si tens cap dubte sobre l’ús de les nostres cookies, <a class="cc__link" href="/ca/contactar">contacta amb nosaltres</a>.',
            },
          ],
        },
      }      
    },
  },
};
