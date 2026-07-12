import React, { createContext, useContext, ReactNode } from "react";
import { useColorScheme } from "react-native";

import { LightTheme } from "./lightTheme";
import { DarkTheme } from "./darkTheme";
import { AppTheme } from "./theme.types";

const ThemeContext = createContext<AppTheme>(LightTheme);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useColorScheme();

  const theme =
    colorScheme === "dark"
      ? DarkTheme
      : LightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}