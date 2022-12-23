import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../../../constants";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header, Typography } from "../../../components";

const Stack = createNativeStackNavigator();

export const MyProfileRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.myProfile.profile}
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      <Stack.Screen
        name={routes.myProfile.profile}
        component={() => <Typography>My Profile</Typography>}
      />
    </Stack.Navigator>
  );
};
