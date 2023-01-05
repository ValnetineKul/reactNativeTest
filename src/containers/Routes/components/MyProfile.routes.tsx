import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header, Typography } from "../../../components";
import { MyProfileStackParamList } from "../../../types/routes";

const Stack = createNativeStackNavigator<MyProfileStackParamList>();
const Mock = () => <Typography>My Profile</Typography>;

export const MyProfileRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="myProfile/profile"
      screenOptions={{
        header: () => <Header />,
        contentStyle: {
          backgroundColor: COLOR_TEXT_WHITE,
        },
      }}
    >
      <Stack.Screen name="myProfile/profile" component={Mock} />
    </Stack.Navigator>
  );
};
