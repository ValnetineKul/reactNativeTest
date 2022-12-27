import React, { memo } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./BurgerButton.styles";

type BurgerButtonProps = {
  onPress?: () => void;
  style?: ViewStyle;
};

export const BurgerButton = memo(({ onPress, style }: BurgerButtonProps) => {
  return (
    <TouchableOpacity style={[styles.burgerContainer, style]} onPress={onPress}>
      <View style={[styles.burgerItem, styles.marginBottom]} />
      <View style={[styles.burgerItem, styles.marginBottom]} />
      <View style={styles.burgerItem} />
    </TouchableOpacity>
  );
});
