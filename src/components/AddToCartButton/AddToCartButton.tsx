import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { FontWeights, Typography } from "../Typography";
import { styles } from "./AddToCartButton.styles";

type AddToCartButtonProps = {
  style?: ViewStyle;
};

export const AddToCartButton = ({ style }: AddToCartButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Typography
        variant="body1"
        color="white"
        style={{
          fontWeight: FontWeights.fontWeightMedium,
          textAlign: "center",
        }}
      >
        ADD TO CART
      </Typography>
    </TouchableOpacity>
  );
};
