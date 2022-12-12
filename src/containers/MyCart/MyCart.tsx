import React from "react";
import { Image, ScrollView, TouchableOpacity, View, ViewStyle } from "react-native";
import { images } from "../../assets/images";
import { Button, FontWeights, Header, Typography } from "../../components";
import { NavigationProp } from "../../types";
import { styles } from "./MyCart.styles";

type MyCartProps = {
  style?: ViewStyle | ViewStyle[];
} & NavigationProp;

export const MyCart = ({ style, navigation }: MyCartProps) => {
  return (
    <>
      <Header type="main" navigation={navigation} />
      <View style={[styles.myCartContainer, style]}>
        <Image source={images.avatar} />
        <Typography
          variant="h6"
          style={{ fontWeight: FontWeights.fontWeightBold, marginTop: 16 }}
          color="gray"
        >
          Login First!
        </Typography>
        <Typography color="gray" style={{ marginTop: 4 }}>
          Login first to view your cart
        </Typography>
        <Button title="LOGIN NOW" style={{ marginTop: 32 }} fullWidth />
        <TouchableOpacity style={{ marginTop: 24 }}>
          <Typography color="blue">New here? Sign Up</Typography>
        </TouchableOpacity>
      </View>
    </>
  );
};
