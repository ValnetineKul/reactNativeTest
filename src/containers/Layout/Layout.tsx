import React, { useEffect } from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { Routes } from "../Routes";
import { useRequestStatusContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import { modalRoutes } from "../../constants";

export const Layout = () => {
  const isDarkMode = useColorScheme() === "dark";

  const { isOnline, recheckConnection } = useRequestStatusContext();
  const navigation = useNavigation();

  const backgroundStyle = {
    flex: 1,
    backGroundColor: "red",
  };

  useEffect(() => {
    if (isOnline === false) {
      navigation.navigate(modalRoutes.tryAgain, {
        onTryAgainPress: () => {
          navigation.goBack();
          recheckConnection?.();
        },
        errorMessage: "No internet connection",
        actionButtonText: "CHECK AGAIN",
      });
    }
  }, [isOnline, navigation, recheckConnection]);

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Routes />
    </View>
  );
};
