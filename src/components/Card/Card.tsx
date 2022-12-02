import React, { type PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./Card.styles";
import { CardVariants } from "./Card.types";

type CardProps = {
  variant?: CardVariants;
  color?: string;
  style?: ViewStyle;
};

export const Card = ({
  variant = "default",
  children,
  style,
}: PropsWithChildren<CardProps>) => {
  return <View style={[styles[variant], style]}>{children}</View>;
};
