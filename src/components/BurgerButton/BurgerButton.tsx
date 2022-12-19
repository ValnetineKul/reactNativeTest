import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./BurgerButton.styles";

type BurgerButtonProps = {
  onPress?: () => void;
};

export const BurgerButton = memo(({ onPress }: BurgerButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.burgerItem, styles.marginBottom]} />
      <View style={[styles.burgerItem, styles.marginBottom]} />
      <View style={styles.burgerItem} />
    </TouchableOpacity>
  );
});
