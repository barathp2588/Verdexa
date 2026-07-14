import { View, Text, StyleSheet } from "react-native";
import GoogleButton from "../components/GoogleButton";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Verdexa 🌱
      </Text>

      <Text style={styles.subtitle}>
        Sign in to continue
      </Text>

      <GoogleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 16,
  },
});