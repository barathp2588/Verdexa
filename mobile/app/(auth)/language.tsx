import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ml", name: "മലയാളം" },
  { code: "hi", name: "हिन्दी" },
];

export default function LanguageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Language</Text>

      {LANGUAGES.map((language) => (
        <Pressable
          key={language.code}
          style={styles.card}
          onPress={() => console.log("Language selected")}
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
    backgroundColor: "#f8fcf9",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 14,
    borderRadius: 14,
    elevation: 3,
  },

  language: {
    fontSize: 18,
    fontWeight: "600",
  },
});