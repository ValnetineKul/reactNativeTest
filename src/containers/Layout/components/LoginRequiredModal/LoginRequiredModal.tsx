import React from "react";
import { View } from "react-native";
import { Button, Modal, Typography } from "../../../../components";
import { routes } from "../../../../constants";
import { WarningIcon } from "../../../../theme/icons/components";
import { NavigationProp } from "../../../../types";
import { styles } from "../ModalCommon.styles";

export const LoginRequiredModal = (props: NavigationProp) => {
  const { navigation } = props;

  const handleNavigationClick = (route: string) => () => {
    navigation?.goBack();
    setTimeout(() => {
      navigation?.navigate(route);
    }, 250);
  };
  return (
    <Modal icon={<WarningIcon />} title="Login To Continue" {...props}>
      <Typography color="gray" style={[styles.subtitle]}>
        Please login to add product in your cart
      </Typography>
      <View style={[styles.actionButton, styles.flexDirectionRowProvider]}>
        <Button
          style={[styles.notLastButtonMargin]}
          onPress={handleNavigationClick(routes.auth.login)}
          title="LOGIN"
        />
        <Button
          onPress={handleNavigationClick(routes.auth.signUp)}
          title="SIGN UP"
        />
      </View>
    </Modal>
  );
};
