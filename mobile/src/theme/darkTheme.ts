import { LightTheme } from "./lightTheme";
import { AppTheme } from "./theme.types";

export const DarkTheme: AppTheme = {
  ...LightTheme,

  colors: {
    ...LightTheme.colors,

    background: {
      primary: "#0F172A",
      secondary: "#1E293B",
      tertiary: "#334155",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#CBD5E1",
      disabled: "#94A3B8",
      inverse: "#000000",
    },

    border: {
      light: "#334155",
      medium: "#475569",
      dark: "#64748B",
    },
  },
};