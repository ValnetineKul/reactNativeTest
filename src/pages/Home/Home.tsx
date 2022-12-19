import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerMenu } from "../../containers/Routes";
import { routes } from "../../constants";
import { Products } from "../../containers";

const Drawer = createDrawerNavigator();

export const Home = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerMenu />}
      initialRouteName={routes.productsMain}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name={routes.productsMain} component={Products} />
    </Drawer.Navigator>
  );
};
