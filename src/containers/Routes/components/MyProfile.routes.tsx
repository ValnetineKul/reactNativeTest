import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLOR_TEXT_WHITE } from "../../../theme";
import { Header } from "../../../components";
import { MyProfileStackParamList } from "../../../types/routes";
import { MyProfile } from "../../MyProfile";
import { useAuthContext } from "../../../context";
import { LoginRequiredModal, LogoutModal } from "../../Layout/components";

const Stack = createNativeStackNavigator<MyProfileStackParamList>();

export const MyProfileRoutes = () => {
  const { authData } = useAuthContext();
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
      {authData ? (
        <Stack.Screen name="myProfile/profile" component={MyProfile} />
      ) : (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="loginRequired"
          component={LoginRequiredModal}
        />
      )}
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: false,
        }}
      >
        <Stack.Screen name="logout" component={LogoutModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
