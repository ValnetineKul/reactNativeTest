import { DrawerActions, useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon } from "../../theme/icons";
import { BurgerButton } from "../BurgerButton";
import { Typography } from "../Typography";
import { getHeaderType } from "./Header.helpers";
import { styles } from "./Header.styles";

export const Header = () => {
  const navigation = useNavigation();

  const { name } = useRoute();

  const headerType = getHeaderType(name);

  const handlePressBack = () => {
    navigation?.goBack();
  };

  const openMainDrawer = useCallback(() => {
    navigation?.dispatch(DrawerActions.toggleDrawer());
  }, [navigation]);

  const handleShoppingBagPress = () => {
    navigation.navigate("myCart");
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        {headerType === "main" && (
          <>
            <BurgerButton style={styles.leftControls} onPress={openMainDrawer} />
            <Typography style={styles.title} variant="h6" color="white">
              Ecommerce store
            </Typography>
            <TouchableOpacity style={[styles.rightControls]} onPress={handleShoppingBagPress}>
              <ShoppingBagIcon />
            </TouchableOpacity>
          </>
        )}
        {headerType === "productDetails" && (
          <>
            <TouchableOpacity style={[styles.leftControls]} onPress={handlePressBack}>
              <ArrowLeftIcon />
            </TouchableOpacity>
            <View style={[styles.iconContainer, styles.rightControls]}>
              <TouchableOpacity style={[styles.margin]}>
                <HeartIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShoppingBagPress}>
                <ShoppingBagIcon />
              </TouchableOpacity>
            </View>
          </>
        )}
        {headerType === "myCart" && (
          <>
            <TouchableOpacity style={[styles.leftControls]} onPress={handlePressBack}>
              <ArrowLeftIcon />
            </TouchableOpacity>
            <Typography style={styles.title} variant="h6" color="white">
              My Cart
            </Typography>
            <View />
          </>
        )}
        {headerType === "myProfile" && (
          <>
            <TouchableOpacity style={[styles.leftControls]} onPress={handlePressBack}>
              <ArrowLeftIcon />
            </TouchableOpacity>
            <Typography style={styles.title} variant="h6" color="white">
              My Profile
            </Typography>
            <TouchableOpacity style={[styles.rightControls]} onPress={handleShoppingBagPress}>
              <ShoppingBagIcon />
            </TouchableOpacity>
          </>
        )}

        {headerType === "search" && (
          <>
            <TouchableOpacity style={[styles.leftControls]} onPress={handlePressBack}>
              <ArrowLeftIcon />
            </TouchableOpacity>
            <Typography style={styles.title} variant="h6" color="white">
              Search
            </Typography>
            <TouchableOpacity style={[styles.rightControls]} onPress={handleShoppingBagPress}>
              <ShoppingBagIcon />
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
