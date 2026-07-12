import React from "react";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "@/src/theme";
import "@/src/localization/i18n";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}