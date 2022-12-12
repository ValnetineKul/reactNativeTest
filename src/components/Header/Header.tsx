import { DrawerActions } from "@react-navigation/native";
import React, { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { routes } from "../../constants";
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon } from "../../theme/icons";
import { NavigationProp } from "../../types";
import { BurgerButton } from "../BurgerButton";
import { Typography } from "../Typography";
import { styles } from "./Header.styles";

type HeaderProps = {
  type: "main" | "product";
};

export const Header = ({
  type,
  navigation,
  drawerNavigation,
}: HeaderProps & NavigationProp) => {
  const handlePressBack = () => {
    navigation?.goBack();
  };

  const openMainDrawer = useCallback(() => {
    drawerNavigation?.dispatch(DrawerActions.toggleDrawer());
  }, [drawerNavigation]);

  const handleShoppingBagPress = () => {
    navigation?.navigate(routes.myCart);
  };

  return (
    <View style={styles.headerContainer}>
      {type === "main" && (
        <>
          <BurgerButton onPress={openMainDrawer} />
          <Typography variant="h6" color="white">
            Ecommerce store
          </Typography>
          <TouchableOpacity onPress={handleShoppingBagPress}>
            <ShoppingBagIcon />
          </TouchableOpacity>
        </>
      )}
      {type === "product" && (
        <>
          <TouchableOpacity onPress={handlePressBack}>
            <ArrowLeftIcon />
          </TouchableOpacity>
          <View style={[styles.iconContainer]}>
            <TouchableOpacity style={[styles.margin]}>
              <HeartIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShoppingBagPress}>
              <ShoppingBagIcon />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};
