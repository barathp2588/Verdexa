import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import { DEFAULT_LANGUAGE, LanguageCode } from "./languageConfig";
import { LanguageService } from "./languageService";

import en from "./locales/en.json";
import ta from "./locales/ta.json";
import te from "./locales/te.json";
import kn from "./locales/kn.json";
import ml from "./locales/ml.json";
import hi from "./locales/hi.json";

const resources = {
  en: { translation: en },
  ta: { translation: ta },
  te: { translation: te },
  kn: { translation: kn },
  ml: { translation: ml },
  hi: { translation: hi },
};

const supportedLanguages: LanguageCode[] = [
  "en",
  "ta",
  "te",
  "kn",
  "ml",
  "hi",
];

export async function initializeLocalization() {
  let language = await LanguageService.getLanguage();

  if (!supportedLanguages.includes(language)) {
    const deviceLanguage =
      Localization.getLocales()[0]?.languageCode as LanguageCode;

    language = supportedLanguages.includes(deviceLanguage)
      ? deviceLanguage
      : DEFAULT_LANGUAGE;
  }

  await i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: "v4",
      resources,
      lng: language,
      fallbackLng: DEFAULT_LANGUAGE,

      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;