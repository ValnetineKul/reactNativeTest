import React from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./Divider.styles";

export const Divider = ({ style }: { style?: ViewStyle }) => {
  return <View style={[styles.divider, style]} />;
};
