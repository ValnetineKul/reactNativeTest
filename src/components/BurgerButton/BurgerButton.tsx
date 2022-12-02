import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./BurgerButton.styles";

export const BurgerButton = () => {
  return (
    <TouchableOpacity>
      <View style={[styles.burgerItem, styles.marginBottom]} />
      <View style={[styles.burgerItem, styles.marginBottom]} />
      <View style={styles.burgerItem} />
    </TouchableOpacity>
  );
};
