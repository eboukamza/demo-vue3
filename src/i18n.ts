import { createI18n } from "vue-i18n";
const i18n = createI18n({
  locale: "es",
  fallbackLocale: "en",
  allowComposition: true,
  //legacy: false,
  messages: {
    en: {
      hello: "hi buddy",
      days: "{count} day | {count} day | {count} days",
    },
    es: {
      hello: "hola tronco",
      days: "{count} días | {count} día | {count} días",
    },
  },
});

export default i18n;
