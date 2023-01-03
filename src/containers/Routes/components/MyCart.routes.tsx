import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header } from "../../../components";
import { MyCart } from "../../MyCart";
import { useAuthContext } from "../../../context";
import { OrderConfirmation } from "../../MyCart/components";
import { MyCartLoginContainer } from "../../MyCartLogin";
import { MyCartStackParamList } from "../../../types/routes";

const Stack = createNativeStackNavigator<MyCartStackParamList>();

export const MyCartRoutes = () => {
  const { loginData } = useAuthContext();
  return (
    <Stack.Navigator
      initialRouteName="myCart/cart"
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      {loginData ? (
        <Stack.Screen name="myCart/cart" component={MyCart} />
      ) : (
        <Stack.Screen name="myCart/loginRequired" component={MyCartLoginContainer} />
      )}
      <Stack.Screen
        name="myCart/orderConfirmation"
        component={OrderConfirmation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
