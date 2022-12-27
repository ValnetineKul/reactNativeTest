import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../../../constants";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header, Typography } from "../../../components";
import { MyCartLoginContainer } from "../../MyCartLogin";
import { useAuthContext } from "../../../context";

const Stack = createNativeStackNavigator();

export const MyOrdersRoutes = () => {
  const { loginData } = useAuthContext();
  return (
    <Stack.Navigator
      initialRouteName={routes.myOrders.orders}
      screenOptions={{
        header: Header,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      {loginData ? (
        <Stack.Screen
          name={routes.myOrders.orders}
          component={() => <Typography>My orders</Typography>}
        />
      ) : (
        <Stack.Screen
          name={routes.myOrders.loginRequired}
          component={MyCartLoginContainer}
        />
      )}
    </Stack.Navigator>
  );
};
