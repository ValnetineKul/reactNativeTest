import React, { type PropsWithChildren } from "react";
import { Image, View, ViewStyle } from "react-native";
import { Card } from "../Card";
import { Typography } from "../Typography";
import { Price } from "./components";
import { styles } from "./ProductCard.styles";
import { CardVariants } from "./ProductCard.types";

type CardProps = {
  name: string;
  price: string;
  oldPrice?: string | null;
  currency?: string;
  discount?: string;
  imageSrc: string;
  style?: ViewStyle;
};

export const ProductCard = ({
  name,
  price,
  oldPrice,
  currency,
  discount,
  imageSrc,
  style,
}: PropsWithChildren<CardProps>) => {
  return (
    <Card variant={CardVariants.default} shadowBox style={style}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageSrc,
          }}
        />
      </View>
      <Typography variant="body1">{name}</Typography>
      <Price
        price={price}
        oldPrice={oldPrice}
        currency={currency}
        discount={discount}
      />
    </Card>
  );
};
