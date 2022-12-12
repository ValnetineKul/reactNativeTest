import React from "react";
import { SafeAreaView, ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../../components";
import { useAuthContext } from "../../context";
import { NavigationProp } from "../../types";
import { MyCartLogin } from "./components";
import { MyCartEmpty } from "./components/MyCartEmpty";
import { styles } from "./MyCart.styles";

type MyCartProps = {
  style?: ViewStyle | ViewStyle[];
} & NavigationProp;

export const MyCart = ({ style, navigation }: MyCartProps) => {
  const { loginData } = useAuthContext();
  return (
    <>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <ScrollView contentContainerStyle={[styles.myCartContainer, style]}>
        {!loginData && <MyCartLogin navigation={navigation} />}
        {!!loginData && <MyCartEmpty navigation={navigation} />}
      </ScrollView>
    </>
  );
};
