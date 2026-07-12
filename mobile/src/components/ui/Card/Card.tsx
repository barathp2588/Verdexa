import React from "react";
import {
  View,
  ViewProps,
} from "react-native";

import { useAppTheme } from "@/src/theme";
import { styles } from "./Card.styles";

interface CardProps extends ViewProps {}

export default function Card({
  style,
  children,
  ...props
}: CardProps) {

  const theme = useAppTheme();

  return (
    <View
      {...props}
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.background.primary,
        },
        theme.shadows.sm,
        style,
      ]}
    >
      {children}
    </View>
  );
}