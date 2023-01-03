import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header, Typography } from "../../../components";
import { MyCartLoginContainer } from "../../MyCartLogin";
import { useAuthContext } from "../../../context";
import { MyOrdersStackParamList } from "../../../types/routes";

const Stack = createNativeStackNavigator<MyOrdersStackParamList>();

const Mock = () => <Typography>My orders</Typography>;

export const MyOrdersRoutes = () => {
  const { loginData } = useAuthContext();
  return (
    <Stack.Navigator
      initialRouteName="myOrders/orders"
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      {loginData ? (
        <Stack.Screen name="myOrders/orders" component={Mock} />
      ) : (
        <Stack.Screen
          name="myOrders/loginRequired"
          component={MyCartLoginContainer}
        />
      )}
    </Stack.Navigator>
  );
};
