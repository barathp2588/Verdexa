import { useEffect, useState } from "react";
import { Stack } from "expo-router";

import { initializeLocalization } from "@/src/localization/i18n";

export default function RootLayout() {

  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function loadLanguage() {
      await initializeLocalization();
      setReady(true);
    }

    loadLanguage();
  }, []);


  if (!ready) {
    return null;
  }


  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}