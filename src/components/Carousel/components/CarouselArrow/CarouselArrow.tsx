import React from "react";
import { View, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./CarouselArrow.styles";

type CarouselArrowProps = {
  onPress?: () => void;
  right?: boolean;
  style?: ViewStyle | ViewStyle[];
};

export const CarouselArrow = ({ right, onPress, style }: CarouselArrowProps) => {
  return (
    <TouchableOpacity
      style={[styles.arrowContainer, style, { ...(right && styles.right) }]}
      onPress={onPress}
    >
      <View style={[styles.arrowTop]} />
      <View style={[styles.arrowBottom]} />
    </TouchableOpacity>
  );
};
