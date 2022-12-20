import React from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { COLOR_TEXT_BLACK, COLOR_TEXT_WHITE } from "../../theme";
import { DrawerMenu, Routes } from "../Routes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "../../constants";

const Drawer = createDrawerNavigator();

export const Layout = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLOR_TEXT_BLACK : COLOR_TEXT_WHITE,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={() => <DrawerMenu />}
          initialRouteName={routes.main}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name={routes.main} component={Routes} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};
