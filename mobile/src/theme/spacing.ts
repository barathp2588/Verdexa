export const Spacing = {
  none: 0,

  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,

  screenHorizontal: 20,
  screenVertical: 24,

  cardPadding: 16,
  buttonPadding: 16,
  inputPadding: 14,
} as const;

export type AppSpacing = typeof Spacing;