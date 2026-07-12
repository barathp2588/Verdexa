import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
} from "react-native";

import { useAppTheme } from "@/src/theme";
import { styles } from "./Input.styles";

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  ...props
}: InputProps) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          { color: theme.colors.text.primary },
        ]}
      >
        {label}
      </Text>

      <TextInput
        {...props}
        style={[
          styles.input,
          {
            borderColor: error
              ? "#D32F2F"
              : theme.colors.border.medium,

            color: theme.colors.text.primary,
          },
        ]}
      />

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
    </View>
  );
}