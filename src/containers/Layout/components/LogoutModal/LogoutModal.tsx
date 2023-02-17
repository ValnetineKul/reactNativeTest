import React from "react";
import { View } from "react-native";
import { Button, Modal, Typography } from "../../../../components";
import { WarningIcon } from "../../../../theme/icons/components";
import { styles } from "../ModalCommon.styles";
import { MainStackProps } from "../../../../types/routes";

export const LogoutModal = (props: MainStackProps<"logout">) => {
  const { navigation, route } = props;
  const handleTryAgainPress = () => {
    route?.params?.onLogoutPress?.();
  };
  return (
    <Modal icon={<WarningIcon />} title="Something went wrong" {...props}>
      <Typography color="gray" style={[styles.subtitle]}>
        Are you sure you want to logout?
      </Typography>
      <View style={[styles.actionButton, styles.flexDirectionRowProvider]}>
        <Button
          style={[styles.notLastButtonMargin]}
          onPress={() => navigation?.goBack()}
          title="CANCEL"
          color="red"
        />
        <Button onPress={handleTryAgainPress} title="LOGOUT" />
      </View>
    </Modal>
  );
};
