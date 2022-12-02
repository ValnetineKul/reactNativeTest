import React, { type PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLOR_TEXT_WHITE, Header } from "../../components";
import { ProductDetails } from "../ProductDetails";
import { Products } from "../Products";

export const Layout = ({ children }: PropsWithChildren) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    flexGrow: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: COLOR_TEXT_WHITE,
          flexGrow: 1,
        }}
      >
        <ScrollView stickyHeaderHiddenOnScroll>
          <Header />
        </ScrollView>
        {/* <Products /> */}
        <ProductDetails />

        {children}
      </View>
    </SafeAreaView>
  );
};
