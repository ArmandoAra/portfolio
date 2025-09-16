import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//languages we support in our app
import en_lang from "./locales/en/translation.json";
import pt_lang from "./locales/pt/translation.json";
import es_lang from "./locales/es/translation.json";

// leer primero el idioma guardado (directo de localStorage)
const savedLang = localStorage.getItem("language");
let initialLang = "pt"; // fallback por defecto

if (savedLang) {
  try {
    initialLang = JSON.parse(savedLang).lang;
  } catch {
    console.log("Error leyendo idioma de localStorage");
  }
}

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en_lang,
  },
  pt: {
    translation: pt_lang,
  },
  es: {
    translation: es_lang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang, // default language
  fallbackLng: "pt", // use pt if detected lng is not available
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
