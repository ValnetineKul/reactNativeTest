import React, { type PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { Typography } from "../Typography";
import { styles } from "./Modal.styles";

type ModalProps = {
  icon?: JSX.Element;
  title?: string;
  style?: ViewStyle | ViewStyle[];
  backgroundColor?: "gray" | "white";
};

export const Modal = ({
  icon,
  title,
  children,
  style,
  backgroundColor = "gray",
}: PropsWithChildren<ModalProps>) => {
  return (
    <View style={[styles.modalBackground, styles[backgroundColor]]}>
      <View
        style={[
          styles.modalContainer,
          { ...(backgroundColor === "white" && styles.whiteBackgroundPadding) },
          style,
        ]}
      >
        {icon && <View style={[styles.iconContainer]}>{icon}</View>}
        {!!title && (
          <Typography variant="h6" style={[styles.title]}>
            {title}
          </Typography>
        )}
        {children}
      </View>
    </View>
  );
};
