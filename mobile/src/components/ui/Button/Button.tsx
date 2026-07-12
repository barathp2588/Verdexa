import {
  Pressable,
  Text,
  ActivityIndicator,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";

import { useAppTheme } from "@/src/theme";
import { styles } from "./Button.styles";

interface ButtonProps extends Omit<PressableProps, "style"> {
  title: string;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function Button({
  title,
  loading = false,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const theme = useAppTheme();

  return (
    <Pressable
      {...props}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor: theme.colors.brand.primary,
        },
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text
          style={[
            styles.text,
            {
              color: "#FFFFFF",
            },
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}