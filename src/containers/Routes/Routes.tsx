import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { modalRoutes, routes } from "../../constants";
import { Home } from "../../pages";
import { COLOR_TEXT_WHITE } from "../../theme";
import { ChooseColorModal } from "../Layout/components";
import { LoginModal } from "../Layout/components/LoginModal";
import { ProductAddedModal } from "../Layout/components/ProductAddedModal";
import { MyCart } from "../MyCart";
import { ProductDetails } from "../ProductDetails";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.main}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: COLOR_TEXT_WHITE,
          },
        }}
      >
        <Stack.Group>
          <Stack.Screen name={routes.main} component={Home} />
          <Stack.Screen name={routes.productDetails} component={ProductDetails} />
          <Stack.Screen name={routes.myCart} component={MyCart} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name={modalRoutes.chooseColor}
            component={ChooseColorModal}
          />
          <Stack.Screen
            name={modalRoutes.productAdded}
            component={ProductAddedModal}
          />
          <Stack.Screen name={modalRoutes.login} component={LoginModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
