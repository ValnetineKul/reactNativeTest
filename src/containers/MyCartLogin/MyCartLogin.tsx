import React from "react";
import { ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationProp } from "../../types";
import { styles } from "./MyCartLogin.styles";
import { MyCartLogin } from "../MyCart/components";

type MyCartProps = {
  style?: ViewStyle | ViewStyle[];
} & NavigationProp;

export const MyCartLoginContainer = ({ style, navigation }: MyCartProps) => {
  return (
    <ScrollView contentContainerStyle={[styles.myCartContainer, style]}>
      <MyCartLogin navigation={navigation} />
    </ScrollView>
  );
};
