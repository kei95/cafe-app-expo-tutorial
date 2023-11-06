import { Text as RNText } from "react-native";

const VARIANT_STYLES = {
  base: "text-base font-semibold",
  sm: "text-sm font-semibold",
  md: "text-lg font-bold",
  title: "text-3xl font-semibold",
} as const;

type TypographyVariant = keyof typeof VARIANT_STYLES;

interface TypographyProps {
  children: string | string[];
  variant: TypographyVariant;
  styleClass?: string;
}

export function Text({ children, variant, styleClass }: TypographyProps) {
  return (
    <RNText
      className={`text-base font-semibold ${VARIANT_STYLES[variant]} ${styleClass}`}
    >
      {children}
    </RNText>
  );
}
