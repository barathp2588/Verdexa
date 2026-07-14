import { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/language");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.tagline}>
        Don't just buy vegetables.
      </Text>

      <Text style={styles.tagline}>
        Follow the farmer who grows them.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f7528",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  logo: {
    width: 260,
    height: 260,
    marginBottom: 25,
  },

  tagline: {
    color: "#6b7b6b",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: 0.5,
  },
});