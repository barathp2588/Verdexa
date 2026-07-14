import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Name */}
      <Text style={styles.title}>VERDEXA</Text>

      {/* Tagline */}
      <Text style={styles.subtitle}>
        Connecting Customers{"\n"}
        with{"\n"}
        Trusted Farmers
      </Text>

      {/* Get Started Button */}
      <Pressable
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>
          Get Started →
        </Text>
      </Pressable>

      {/* Sign In */}
      <View style={styles.signInContainer}>
        <Text style={styles.normalText}>
          Already have an account?
        </Text>

        <Pressable onPress={() => router.push("/login")}>
          <Text style={styles.signIn}>
            Sign In
          </Text>
        </Pressable>
      </View>

      {/* Divider */}
      <View style={styles.line} />

      {/* Policy */}
      <Text style={styles.policyText}>
        By continuing, you agree to our
      </Text>

      <View style={styles.policyRow}>
        <Pressable>
          <Text style={styles.policyLink}>
            Terms & Conditions
          </Text>
        </Pressable>

        <Text style={styles.dot}> • </Text>

        <Pressable>
          <Text style={styles.policyLink}>
            Privacy Policy
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FCF7",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 25,
    paddingVertical: 35,
  },

  logo: {
    width: 230,
    height: 230,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#1B5E20",
    letterSpacing: 2,
    marginTop: -10,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 32,
    color: "#4E5D52",
    fontWeight: "500",
    marginTop: -10,
  },

  button: {
    width: "100%",
    backgroundColor: "#2E7D32",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    elevation: 4,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 19,
    fontWeight: "700",
  },

  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  normalText: {
    color: "#666",
    fontSize: 16,
  },

  signIn: {
    color: "#2E7D32",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 5,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#E0E0E0",
  },

  policyText: {
    color: "#888",
    fontSize: 14,
  },

  policyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -15,
  },

  policyLink: {
    color: "#2E7D32",
    fontWeight: "600",
    fontSize: 14,
  },

  dot: {
    color: "#888",
  },
});