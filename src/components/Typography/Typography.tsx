import React, { type PropsWithChildren } from "react";
import { Text, TextStyle } from "react-native";
import { styles } from "./Typography.styles";
import { TypographyColors, TypographyVariants } from "./Typography.types";

type TypographyProps = {
  variant?: TypographyVariants;
  color?: TypographyColors;
  style?: TextStyle | TextStyle[];
};

export const Typography = ({
  variant = "body1",
  color = "black",
  children,
  style,
}: PropsWithChildren<TypographyProps>) => {
  return (
    <Text style={[styles.font, styles[variant], styles[color], style]}>
      {children}
    </Text>
  );
};
