import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ShoppingBagIcon } from "../../theme/icons";
import { BurgerButton } from "../BurgerButton";
import { Typography } from "../Typography";
import { styles } from "./Header.styles";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <BurgerButton />
      <Typography variant="h6" color="white">
        Ecommerce store
      </Typography>
      <TouchableOpacity>
        <ShoppingBagIcon />
      </TouchableOpacity>
    </View>
  );
};
