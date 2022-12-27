import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../../../constants";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header, Typography } from "../../../components";
import { MyCart } from "../../MyCart";
import { MyCartLoginContainer } from "../../MyCartLogin";
import { useAuthContext } from "../../../context";

const Stack = createNativeStackNavigator();

export const MyCartRoutes = () => {
  const { loginData } = useAuthContext();
  return (
    <Stack.Navigator
      initialRouteName={routes.myCart.cart}
      screenOptions={{
        header: Header,
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
      <Stack.Screen
        name={routes.myCart.orderConfirmation}
        component={() => <Typography>Order confirmation</Typography>}
      />
    </Stack.Navigator>
  );
};
