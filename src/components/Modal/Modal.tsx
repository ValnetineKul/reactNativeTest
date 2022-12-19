import React, { type PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { COLOR_MODAL_BACKGROUND_GRAY } from "../../theme";
import { flexHelper } from "../../utils";
import { Typography } from "../Typography";
import { styles } from "./Modal.styles";

type ModalProps = {
  icon?: JSX.Element;
  title?: string;
  style?: ViewStyle | ViewStyle[];
};

export const Modal = ({
  icon,
  title,
  children,
  style,
}: PropsWithChildren<ModalProps>) => {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: COLOR_MODAL_BACKGROUND_GRAY,
        ...flexHelper({}),
      }}
    >
      <View style={[styles.modalContainer, style, { zIndex: 1000 }]}>
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
