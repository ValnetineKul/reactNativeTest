import React, { type PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./Card.styles";
import { CardVariants } from "./Card.types";

type CardProps = {
  variant?: CardVariants;
  color?: string;
  style?: ViewStyle | ViewStyle[];
  shadowBox?: boolean;
};

export const Card = ({
  variant = "default",
  children,
  shadowBox,
  style,
}: PropsWithChildren<CardProps>) => {
  return (
    <View
      style={[
        styles[variant],
        style,
        { ...((shadowBox || variant === "horizontalFull") && styles.shadowBox) },
      ]}
    >
      {children}
    </View>
  );
};
