import { Pressable, Text } from "react-native";
import { signInWithGoogle } from "@/src/services/auth";

export default function GoogleButton() {

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable onPress={handleGoogleLogin}>
      <Text>
        Continue with Google
      </Text>
    </Pressable>
  );
}