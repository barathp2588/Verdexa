export type LanguageCode =
  | "en"
  | "ta"
  | "te"
  | "kn"
  | "ml"
  | "hi";

export interface Language {
  code: LanguageCode;
  englishName: string;
  nativeName: string;
  locale: string;
  flag: string;
  isRTL: boolean;
}

export const SUPPORTED_LANGUAGES: readonly Language[] = [
  {
    code: "en",
    englishName: "English",
    nativeName: "English",
    locale: "en-IN",
    flag: "🇬🇧",
    isRTL: false,
  },
  {
    code: "ta",
    englishName: "Tamil",
    nativeName: "தமிழ்",
    locale: "ta-IN",
    flag: "🇮🇳",
    isRTL: false,
  },
  {
    code: "te",
    englishName: "Telugu",
    nativeName: "తెలుగు",
    locale: "te-IN",
    flag: "🇮🇳",
    isRTL: false,
  },
  {
    code: "kn",
    englishName: "Kannada",
    nativeName: "ಕನ್ನಡ",
    locale: "kn-IN",
    flag: "🇮🇳",
    isRTL: false,
  },
  {
    code: "ml",
    englishName: "Malayalam",
    nativeName: "മലയാളം",
    locale: "ml-IN",
    flag: "🇮🇳",
    isRTL: false,
  },
  {
    code: "hi",
    englishName: "Hindi",
    nativeName: "हिन्दी",
    locale: "hi-IN",
    flag: "🇮🇳",
    isRTL: false,
  },
] as const;

export const DEFAULT_LANGUAGE: LanguageCode = "en";