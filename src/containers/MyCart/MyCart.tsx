import React from "react";
import { ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Typography } from "../../components";
import { NavigationProp } from "../../types";
import { MyCartEmpty } from "./components/MyCartEmpty";
import { styles } from "./MyCart.styles";

type MyCartProps = {
  style?: ViewStyle | ViewStyle[];
} & NavigationProp;

const tempProductCount = 0;

export const MyCart = ({ style, navigation }: MyCartProps) => {
  return (
    <ScrollView contentContainerStyle={[styles.myCartContainer, style]}>
      {tempProductCount ? (
        <Typography>Products</Typography>
      ) : (
        <MyCartEmpty navigation={navigation} />
      )}
    </ScrollView>
  );
};
