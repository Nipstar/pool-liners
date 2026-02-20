/**
 * Z-index scale for consistent layering
 * Higher values appear above lower values
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  header: 50,
  mobileMenu: 60,
  modal: 100,
  popover: 110,
  toast: 200,
} as const;

/**
 * Breakpoints matching Tailwind defaults
 * For use in JavaScript logic
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Animation durations in milliseconds
 */
export const DURATION = {
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
} as const;
