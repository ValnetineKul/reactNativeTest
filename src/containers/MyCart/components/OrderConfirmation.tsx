import React from "react";
import { Image, View } from "react-native";
import { images } from "../../../assets/images";
import { Typography, Button } from "../../../components";
import { routes } from "../../../constants";
import { NavigationProp } from "../../../types";
import { styles } from "../MyCart.styles";
import { Fireworks } from "../../../components/Fireworks";

type OrderConfirmationProps = {} & NavigationProp;

export const OrderConfirmation = ({ navigation }: OrderConfirmationProps) => {
  const handleContinueShoppingPress = () => {
    navigation?.navigate(routes.main.products);
  };

  return (
    <View style={[styles.myCartContainer]}>
      <Fireworks density={10} iterations={4} speed={1} />
      <Typography variant="h1" style={styles.bigTitle} color="blue">
        Order Confirmation
      </Typography>
      <Image source={images.boxOrderConfirmation} />
      <Typography variant="h6" style={styles.title} color="gray">
        Thank you for placing your order with us!
      </Typography>
      <Typography color="gray" style={styles.subTitle}>
        Please check your email for more details. For any questions and further
        information please contact our customer support.
      </Typography>
      <Button
        title="CONTINUE SHOPPING"
        style={styles.actionButton}
        fullWidth
        onPress={handleContinueShoppingPress}
      />
    </View>
  );
};
