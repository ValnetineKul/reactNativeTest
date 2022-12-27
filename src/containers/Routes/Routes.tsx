import React from "react";
import { routes } from "../../constants";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
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

const Drawer = createDrawerNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={DrawerMenu}
        initialRouteName={routes.main.root}
        defaultScreenOptions={{
          headerShown: false,
        }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          options={{
            drawerItemStyle: { height: 0 },
          }}
          name={routes.main.root}
          component={StoreFrontRoutes}
        />
        <Drawer.Screen
          options={{ drawerLabel: "My Profile", drawerIcon: () => <ProfileIcon /> }}
          name={routes.myProfile.root}
          component={MyProfileRoutes}
        />
        <Drawer.Screen
          options={{
            drawerLabel: "My WishList",
            drawerIcon: () => <HeartFilledIcon />,
          }}
          name={routes.myWishlist.root}
          component={MyWishListRoutes}
        />
        <Drawer.Screen
          options={{
            drawerLabel: "My Cart",
            drawerIcon: () => <ShoppingBagIcon color={COLOR_TEXT_BLUE} />,
          }}
          name={routes.myCart.root}
          component={MyCartRoutes}
        />
        <Drawer.Screen
          options={{
            drawerLabel: "My Orders",
            drawerIcon: () => <ShoppingBagFilledIcon />,
          }}
          name={routes.myOrders.root}
          component={MyOrdersRoutes}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
