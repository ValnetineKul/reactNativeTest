import React, { PropsWithChildren } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { FontWeights, Typography } from "../Typography";
import { styles } from "./Button.styles";

type ButtonProps = {
  fullWidth?: boolean;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  title: string;
};

export const Button = ({
  onPress,
  style,
  title,
  fullWidth,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, { ...(fullWidth && styles.fullWidth) }]}
      onPress={onPress}
    >
      <Typography
        variant="body1"
        color="white"
        style={{
          fontWeight: FontWeights.fontWeightMedium,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </TouchableOpacity>
  );
};
