import React, { type PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";

type WrapperContainerProps = {
  padding?: string | number;
  style?: ViewStyle | ViewStyle[];
};

export const WrapperContainer = ({
  padding = 16,
  style,
  children,
}: PropsWithChildren<WrapperContainerProps>) => {
  return <View style={{ padding, ...style }}>{children}</View>;
};
