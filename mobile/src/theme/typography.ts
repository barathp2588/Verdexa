export const Typography = {
  fontFamily: {
    regular: "System",
    medium: "System",
    semiBold: "System",
    bold: "System",
  },

  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    display: 36,
  },

  lineHeight: {
    xs: 18,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 38,
  },
} as const;

export type AppTypography = typeof Typography;