import { Pressable, Text, StyleSheet } from "react-native";
import { signInWithGoogle } from "@/src/services/auth";

export default function GoogleButton() {

  const handlePress = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable
      style={styles.button}
      onPress={handlePress}
    >
      <Text style={styles.text}>
        Continue with Google
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 10,
  },

  text: {
    color: "#fff",
    fontWeight: "600",
  },
});