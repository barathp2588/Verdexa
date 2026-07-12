import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/language");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.logo}>VERDEXA</Text>

      <Text style={styles.tagline}>
        Don't just buy vegetables. Follow the farmer who grows them 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "700",
    letterSpacing: 3,
  },

  tagline: {
    color: "#FFFFFF",
    marginTop: 12,
    fontSize: 16,
  },
});