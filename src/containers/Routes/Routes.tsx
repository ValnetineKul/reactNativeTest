import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerMenu,
  MyCartRoutes,
  MyOrdersRoutes,
  MyWishListRoutes,
  StoreFrontRoutes,
} from "./components";
import { COLOR_TEXT_BLUE } from "../../components";
import { MyProfileRoutes } from "./components/MyProfile.routes";
import {
  HeartFilledIcon,
  ProfileIcon,
  ShoppingBagFilledIcon,
  ShoppingBagIcon,
} from "../../theme/icons";
import { RootDrawerParamList } from "../../types/routes";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerMenu}
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        options={{
          drawerItemStyle: { display: "none" },
        }}
        name="main"
        component={StoreFrontRoutes}
      />
      <Drawer.Screen
        options={{ drawerLabel: "My Profile", drawerIcon: () => <ProfileIcon /> }}
        name="myProfile"
        component={MyProfileRoutes}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "My WishList",
          drawerIcon: () => <HeartFilledIcon />,
        }}
        name="myWishlist"
        component={MyWishListRoutes}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "My Cart",
          drawerIcon: () => <ShoppingBagIcon color={COLOR_TEXT_BLUE} />,
        }}
        name="myCart"
        component={MyCartRoutes}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "My Orders",
          drawerIcon: () => <ShoppingBagFilledIcon />,
        }}
        name="myOrders"
        component={MyOrdersRoutes}
      />
    </Drawer.Navigator>
  );
};
