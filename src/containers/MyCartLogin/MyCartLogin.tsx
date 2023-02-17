import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./MyCartLogin.styles";
import { MyCartLogin } from "../MyCart/components";
import { MyCartStackParamList, MyOrdersStackParamList } from "../../types/routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type MyCartLoginContainerProps =
  | NativeStackScreenProps<MyCartStackParamList, "myCart/loginRequired">
  | NativeStackScreenProps<MyOrdersStackParamList, "myOrders/loginRequired">;

export const MyCartLoginContainer = ({
  route,
  navigation,
}: MyCartLoginContainerProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={[styles.myCartContainer, route.params?.style]}
    >
      <MyCartLogin navigation={navigation} />
    </ScrollView>
  );
};
