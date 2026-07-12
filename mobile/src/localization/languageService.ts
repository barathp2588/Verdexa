import * as SecureStore from "expo-secure-store";
import { DEFAULT_LANGUAGE, LanguageCode } from "./languageConfig";

const LANGUAGE_STORAGE_KEY = "verdexa_language";

export class LanguageService {
  static async saveLanguage(language: LanguageCode): Promise<void> {
    await SecureStore.setItemAsync(LANGUAGE_STORAGE_KEY, language);
  }

  static async getLanguage(): Promise<LanguageCode> {
    const language = await SecureStore.getItemAsync(
      LANGUAGE_STORAGE_KEY
    );

    return (language as LanguageCode) ?? DEFAULT_LANGUAGE;
  }

  static async removeLanguage(): Promise<void> {
    await SecureStore.deleteItemAsync(LANGUAGE_STORAGE_KEY);
  }
}