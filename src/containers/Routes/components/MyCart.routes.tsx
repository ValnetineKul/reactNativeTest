import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../../../constants";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header } from "../../../components";
import { MyCart } from "../../MyCart";
import { useAuthContext } from "../../../context";
import { OrderConfirmation } from "../../MyCart/components";
import { MyCartLoginContainer } from "../../MyCartLogin";

const Stack = createNativeStackNavigator();

export const MyCartRoutes = () => {
  const { loginData } = useAuthContext();
  return (
    <Stack.Navigator
      initialRouteName={routes.myCart.cart}
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      {loginData ? (
        <Stack.Screen name={routes.myCart.cart} component={MyCart} />
      ) : (
        <Stack.Screen
          name={routes.myCart.loginRequired}
          component={MyCartLoginContainer}
        />
      )}
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={routes.myCart.orderConfirmation}
          component={OrderConfirmation}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
