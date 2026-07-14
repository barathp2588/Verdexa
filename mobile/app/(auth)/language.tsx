import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

import i18n from "@/src/localization/i18n";
import { LanguageService } from "@/src/localization/languageService";
import { LanguageCode } from "@/src/localization/languageConfig";

const LANGUAGES: {
  code: LanguageCode;
  name: string;
}[] = [
  { code: "en", name: "English" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ml", name: "മലയാളം" },
  { code: "hi", name: "हिन्दी" },
];

export default function LanguageScreen() {

  const selectLanguage = async (language: LanguageCode) => {
    try {
      // Change app language immediately
      await i18n.changeLanguage(language);

      // Save selected language
      await LanguageService.saveLanguage(language);

      // Move to next screen
      router.replace("/(auth)/welcome");

    } catch (error) {
      console.log("Language selection error:", error);
    }
  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Choose Your Language
      </Text>


      {LANGUAGES.map((language) => (
        <Pressable
          key={language.code}
          style={styles.card}
          onPress={() => selectLanguage(language.code)}
        >

          <Text style={styles.language}>
            {language.name}
          </Text>

        </Pressable>
      ))}

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#F8FCF9",
  },


  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center",
    color: "#1B5E20",
  },


  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 14,
    borderRadius: 14,

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },


  language: {
    fontSize: 18,
    fontWeight: "600",
  },

});