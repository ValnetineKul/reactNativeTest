import React, { type PropsWithChildren } from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { COLOR_TEXT_BLACK, COLOR_TEXT_WHITE } from "../../theme";
import { Routes } from "../Routes";

export const Layout = ({ children }: PropsWithChildren) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLOR_TEXT_BLACK : COLOR_TEXT_WHITE,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Routes />
      {children}
    </View>
  );
};
