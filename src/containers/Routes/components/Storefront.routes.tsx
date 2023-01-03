import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductDetails } from "../../ProductDetails";
import { Products } from "../../Products";
import { COLOR_TEXT_WHITE, Header, Typography } from "../../../components";
import {
  ChooseColorModal,
  ForgotPasswordModal,
  LoginModal,
  LoginRequiredModal,
  ProductAddedModal,
  ProductRemovedModal,
  SignUpModal,
  TryAgainModal,
} from "../../Layout/components";
import { MainStackParamList } from "../../../types/routes";

const Stack = createStackNavigator<MainStackParamList>();

const Mock = () => <Typography>Search</Typography>;

export const StoreFrontRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="main/products"
      screenOptions={{
        header: () => <Header />,
        cardStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      <Stack.Screen name="main/products" component={Products} />
      <Stack.Screen name="main/product" component={ProductDetails} />
      <Stack.Screen name="main/search" component={Mock} />
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth/login" component={LoginModal} />
        <Stack.Screen name="auth/signUp" component={SignUpModal} />
        <Stack.Screen name="auth/forgotPassword" component={ForgotPasswordModal} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: false,
        }}
      >
        <Stack.Screen name="chooseColor" component={ChooseColorModal} />
        <Stack.Screen name="loginRequired" component={LoginRequiredModal} />
        <Stack.Screen name="productAdded" component={ProductAddedModal} />
        <Stack.Screen name="productRemoved" component={ProductRemovedModal} />
        <Stack.Screen name="tryAgain" component={TryAgainModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
