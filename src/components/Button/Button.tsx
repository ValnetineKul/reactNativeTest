import React, { PropsWithChildren, ReactElement } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { Typography } from "../Typography";
import { styles } from "./Button.styles";

export type ButtonProps = {
  fullWidth?: boolean;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  title: string;
  startAdorment?: ReactElement;
  endAdorment?: ReactElement;
  color?: "blue" | "gray" | "red";
  disabled?: boolean;
};

export const Button = ({
  onPress,
  style,
  title,
  fullWidth,
  startAdorment,
  endAdorment,
  color = "blue",
  disabled,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[color], { ...(fullWidth && styles.fullWidth) }, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={[styles.flexProvider]}>
        {startAdorment && <View style={styles.startAdorment}>{startAdorment}</View>}
        <Typography variant="body1" color="white" style={styles.title}>
          {title}
        </Typography>
        {endAdorment && <View style={styles.endAdorment}>{endAdorment}</View>}
      </View>
    </TouchableOpacity>
  );
};
