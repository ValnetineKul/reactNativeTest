import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { modalRoutes, routes } from "../../constants";
import { Home } from "../../pages";
import { COLOR_TEXT_WHITE } from "../../theme";
import {
  ChooseColorModal,
  ForgotPasswordModal,
  LoginRequiredModal,
  ProductAddedModal,
  ProductRemovedModal,
  LoginModal,
  SignUpModal,
} from "../Layout/components";
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
          <Stack.Screen
            name={modalRoutes.loginRequired}
            component={LoginRequiredModal}
          />
          <Stack.Screen
            name={modalRoutes.productRemoved}
            component={ProductRemovedModal}
          />
          <Stack.Screen name={modalRoutes.signUp} component={SignUpModal} />
          <Stack.Screen name={modalRoutes.login} component={LoginModal} />
          <Stack.Screen
            name={modalRoutes.forgotPassword}
            component={ForgotPasswordModal}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
