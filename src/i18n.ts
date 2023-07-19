import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "es",
  fallbackLocale: "en",
  messages: {
    en: {
      hello: "hi budy",
    },
    es: {
      hello: "hola tronco",
    },
  },
});

export default i18n;
