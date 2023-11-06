import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export const THEME_COLORS = {
  white: fullConfig.theme?.colors?.white as "#ffffff",
  bgLight: fullConfig.theme?.colors?.bgLight as "#d4a574",
  bgDark: fullConfig.theme?.colors?.bgDark as "#8c5319",
  text: fullConfig.theme?.colors?.text as "#3C2A21",
  textBackground: fullConfig.theme?.colors?.textBackground as "#00000012",
} as const;
