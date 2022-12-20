import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { modalRoutes, routes } from "../../constants";
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
import { Products } from "../Products";
import { Header } from "../../components";
import { useAuthContext } from "../../context";
import { MyCartLoginContainer } from "../MyCartLogin";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const { loginData } = useAuthContext();
  return (
    <Stack.Navigator
      initialRouteName={routes.productsMain}
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      <Stack.Group>
        <Stack.Screen name={routes.productsMain} component={Products} />
        <Stack.Screen name={routes.productDetails} component={ProductDetails} />
        {loginData ? (
          <Stack.Screen name={routes.myCart} component={MyCart} />
        ) : (
          <Stack.Screen name={routes.myCartLogin} component={MyCartLoginContainer} />
        )}
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal", headerShown: false }}>
        <Stack.Screen name={modalRoutes.chooseColor} component={ChooseColorModal} />
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
  );
};
