export const Colors = {
  brand: {
    primary: "#2E7D32",
    secondary: "#4CAF50",
    light: "#E8F5E9",
    dark: "#1B5E20",
  },

  background: {
    primary: "#FFFFFF",
    secondary: "#F8FAFC",
    tertiary: "#F1F5F9",
  },

  text: {
    primary: "#1E293B",
    secondary: "#64748B",
    disabled: "#94A3B8",
    inverse: "#FFFFFF",
  },

  border: {
    light: "#E2E8F0",
    medium: "#CBD5E1",
    dark: "#94A3B8",
  },

  status: {
    success: "#16A34A",
    warning: "#F59E0B",
    error: "#DC2626",
    info: "#2563EB",
  },

  marketplace: {
    preorder: "#7C3AED",
    fresh: "#10B981",
    organic: "#22C55E",
  },

  social: {
    follow: "#2563EB",
    verified: "#0EA5E9",
    online: "#22C55E",
  },
} as const;

export type AppColors = typeof Colors;