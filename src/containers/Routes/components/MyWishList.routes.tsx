import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../../../constants";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header, Typography } from "../../../components";

const Stack = createNativeStackNavigator();

export const MyWishListRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.myWishlist.wishlist}
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      <Stack.Screen
        name={routes.myWishlist.wishlist}
        component={() => <Typography>My wish list</Typography>}
      />
    </Stack.Navigator>
  );
};
