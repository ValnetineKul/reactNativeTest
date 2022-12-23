import React from "react";
import { Image } from "react-native";
import { images } from "../../../assets/images";
import { Typography, Button } from "../../../components";
import { routes } from "../../../constants";
import { NavigationProp } from "../../../types";
import { styles } from "../MyCart.styles";

type MyCartEmptyProps = {} & NavigationProp;

export const MyCartEmpty = ({ navigation }: MyCartEmptyProps) => {
  const handleShopNowPress = () => {
    navigation?.navigate(routes.main.products);
  };

  return (
    <>
      <Image source={images.box} />
      <Typography variant="h6" style={styles.title} color="gray">
        Your Cart is Empty!
      </Typography>
      <Typography color="gray" style={styles.subTitle}>
        Add product in your cart now
      </Typography>
      <Button
        title="SHOP NOW"
        style={styles.actionButton}
        fullWidth
        onPress={handleShopNowPress}
      />
    </>
  );
};
