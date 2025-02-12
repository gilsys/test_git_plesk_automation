import type { CookieConsentConfig } from "vanilla-cookieconsent";
import { routes } from "./i18n/ui";

// Extend the Window interface to include the dataLayer object
declare global {
    interface Window {
      dataLayer: Record<string, any>[];
      gtag: (...args: any[]) => void;
    }
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
            
            // Grant consent to the Google Analytics service
            console.log("ga4 granted");

            window.gtag("consent", "update", {
              ad_storage: "granted",
              ad_user_data: "granted",
              ad_personalization: "granted",
              analytics_storage: "granted",
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
          description:
            "At Gilsys, we only use essential cookies to understand how you navigate our website with Google Analytics and Google Tag Manager. We do not use trackers for advertising nor share data with third parties. You can accept all cookies or manage your preferences.",
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
              title: "Cookie Usage",
              description:
                "At Gilsys, we use Google Analytics and Google Tag Manager to collect information about how you interact with our website. This allows us to measure site usage, improve performance, and optimize your experience. These cookies may collect data such as anonymized IP addresses or the type of device you are using. We do not use cookies for advertising nor share data with third parties.",
            },
            {
              title: "Analytics Cookies",
              description:
                "These cookies help us understand how you interact with the website through anonymous data collected by Google Tag Manager and Google Analytics.",
              linkedCategory: "analytics",
            },
            {
              title: "More information",
              description:
                'If you have any questions regarding our use of cookies, <a class="cc__link" href="/en/contact">contact us</a>.',
            },
          ],
        },
      },
      

      es: {
        consentModal: {
          title: "Valoramos tu privacidad 🍪",
          description:
            "En Gilsys, solo usamos cookies esenciales para entender cómo navegas por nuestra web con Google Analytics y Google Tag Manager. No utilizamos rastreadores para publicidad ni compartimos datos con terceros. Puedes aceptar todas las cookies o gestionar tus preferencias.",
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
              description:
                "En Gilsys, utilizamos Google Analytics y Google Tag Manager para recopilar información sobre cómo interactúas con nuestra web. Esto nos permite medir el uso del sitio, mejorar su rendimiento y optimizar tu experiencia. Estas cookies pueden recopilar datos como direcciones IP anonimizadas o el tipo de dispositivo que utilizas. No usamos cookies para publicidad ni compartimos datos con terceros.",
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
          description:
            "A Gilsys fem servir cookies essencials per entendre com navegues per la nostra web amb Google Analytics i Google Tag Manager. No utilitzem rastrejadors per publicitat ni compartim dades amb tercers. Pots acceptar totes les cookies o gestionar les teves preferències.",
          acceptAllBtn: "Acceptar",
          acceptNecessaryBtn: "Rebutjar",
          showPreferencesBtn: "Gestionar preferències",
          footer:
          `
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
              description:
                "A Gilsys utilitzem Google Analytics i Google Tag Manager per recollir informació sobre com interactues amb la nostra web. Això ens permet mesurar l’ús del lloc, millorar-ne el rendiment i optimitzar la teva experiència. Aquestes cookies poden recollir dades com l’adreça IP anonimitzada o el tipus de dispositiu que utilitzes. No utilitzem cookies per publicitat ni compartim dades amb tercers.",
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
      },   
    },
  },
};
