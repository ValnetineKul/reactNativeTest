import React, { type PropsWithChildren } from "react";
import { View } from "react-native";
import { Typography } from "../../../Typography";
import { styles } from "./Price.styles";

type CardProps = {
  currency?: string;
  price: string;
  oldPrice?: string | null;
  discount?: string;
};

export const Price = ({
  currency = "$",
  price,
  oldPrice,
  discount,
}: PropsWithChildren<CardProps>) => {
  return (
    <View style={styles.priceContainer}>
      <Typography
        variant="body2"
        style={styles.marginProvider}
      >{`${currency}${price}`}</Typography>
      {oldPrice && (
        <Typography variant="body2" color="gray" style={styles.marginProvider}>
          {`${currency}${oldPrice}`}
        </Typography>
      )}
      {discount && (
        <Typography variant="body2" color="blue">
          {`${discount}% Off`}
        </Typography>
      )}
    </View>
  );
};
