import { useState } from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient
      colors={["#F3FFF2", "#FFF8EE"]}
      style={styles.container}
    >
      {/* Logo */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Name */}
      <Text style={styles.title}>VERDEXA</Text>

      <Text style={styles.subtitle}>
        Fresh from Farmers
      </Text>

      {/* Login Card */}
      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
        />

        {/* Password */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* Login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>
            LOGIN
          </Text>
        </TouchableOpacity>

        {/* Forgot */}
        <TouchableOpacity>
          <Text style={styles.forgot}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Google */}
<TouchableOpacity style={styles.googleButton}>
  <Image
    source={require("../../assets/images/googleicon.png")}
    style={styles.googleIcon}
    resizeMode="contain"
  />

  <Text style={styles.googleText}>
    Continue with Google
  </Text>
</TouchableOpacity>

        {/* Bottom */}
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
          >
            <Text style={styles.signup}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 22,
  },

  logo: {
    width: 95,
    height: 95,
    marginBottom: 10,
  },

  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#1B5E20",
    letterSpacing: 2,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 30,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 10,
  },

  input: {
    height: 58,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 18,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 18,
    height: 58,
    marginBottom: 18,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
  },

  loginButton: {
    backgroundColor: "#2E7D32",
    height: 58,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  forgot: {
    marginTop: 18,
    textAlign: "center",
    color: "#2E7D32",
    fontSize: 15,
    fontWeight: "600",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D1D5DB",
  },

  or: {
    marginHorizontal: 12,
    color: "#666",
    fontWeight: "600",
  },

  googleButton: {
  height: 58,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: "#DADCE0",
  backgroundColor: "#FFFFFF",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
},

  googleIcon: {
  width: 22,
  height: 22,
  marginRight: 12,
},

  googleText: {
  color: "#3C4043",
  fontSize: 16,
  fontWeight: "600",
},

  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  bottomText: {
    color: "#666",
    fontSize: 15,
  },

  signup: {
    color: "#2E7D32",
    marginLeft: 6,
    fontWeight: "700",
    fontSize: 15,
  },
});