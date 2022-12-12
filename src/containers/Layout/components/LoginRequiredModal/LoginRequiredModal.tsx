import React from "react";
import { View } from "react-native";
import { Button, Modal, Typography } from "../../../../components";
import { modalRoutes } from "../../../../constants";
import { WarningIcon } from "../../../../theme/icons/components";
import { NavigationProp } from "../../../../types";
import { styles } from "../ModalCommon.styles";

export const LoginRequiredModal = (props: NavigationProp) => {
  const { navigation } = props;
  return (
    <Modal icon={<WarningIcon />} title="Login To Continue" {...props}>
      <Typography color="gray" style={[styles.subtitle]}>
        Please login to add product in your cart
      </Typography>
      <View style={[styles.actionButton, styles.flexDirectionRowProvider]}>
        <Button
          style={[styles.notLastButtonMargin]}
          onPress={() => navigation?.navigate(modalRoutes.login)}
          title="LOGIN"
        />
        <Button
          onPress={() => navigation?.navigate(modalRoutes.signUp)}
          title="SIGN UP"
        />
      </View>
    </Modal>
  );
};
