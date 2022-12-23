import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { modalRoutes, routes } from "../../../constants";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { ProductDetails } from "../../ProductDetails";
import { Products } from "../../Products";
import { Header, Typography } from "../../../components";
import {
  ChooseColorModal,
  ForgotPasswordModal,
  LoginModal,
  LoginRequiredModal,
  ProductAddedModal,
  ProductRemovedModal,
  SignUpModal,
} from "../../Layout/components";

const Stack = createNativeStackNavigator();

export const StoreFrontRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.main.products}
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      <Stack.Screen name={routes.main.products} component={Products} />
      <Stack.Screen name={routes.main.productDetails} component={ProductDetails} />
      <Stack.Screen
        name={routes.main.search}
        component={() => <Typography>Search</Typography>}
      />
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.auth.login} component={LoginModal} />
        <Stack.Screen name={routes.auth.signUp} component={SignUpModal} />
        <Stack.Screen
          name={routes.auth.forgotPassword}
          component={ForgotPasswordModal}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: false,
        }}
      >
        <Stack.Screen name={modalRoutes.chooseColor} component={ChooseColorModal} />
        <Stack.Screen
          name={modalRoutes.loginRequired}
          component={LoginRequiredModal}
        />
        <Stack.Screen
          name={modalRoutes.productAdded}
          component={ProductAddedModal}
        />
        <Stack.Screen
          name={modalRoutes.productRemoved}
          component={ProductRemovedModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
