import React from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { Routes } from "../Routes";

export const Layout = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    flex: 1,
    backGroundColor: "red",
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Routes />
    </View>
  );
};
