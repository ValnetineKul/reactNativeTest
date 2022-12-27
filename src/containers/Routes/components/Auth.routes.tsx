import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../../../constants";
import { COLOR_TEXT_WHITE } from "../../../theme";
import {
  ForgotPasswordModal,
  LoginModal,
  SignUpModal,
} from "../../Layout/components";

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.auth.login}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      <Stack.Screen name={routes.auth.login} component={LoginModal} />
      <Stack.Screen name={routes.auth.signUp} component={SignUpModal} />
      <Stack.Screen
        name={routes.auth.forgotPassword}
        component={ForgotPasswordModal}
      />
    </Stack.Navigator>
  );
};
