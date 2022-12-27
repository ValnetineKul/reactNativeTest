import React from "react";
import { View } from "react-native";
import { Button, Modal, Typography } from "../../../../components";
import { WarningIcon } from "../../../../theme/icons/components";
import { NavigationProp } from "../../../../types";
import { styles } from "../ModalCommon.styles";
import { RouteProp } from "@react-navigation/native";

export type TryAgainModalProps = {
  route?: RouteProp<{
    params?: {
      errorMessage?: string;
      onTryAgainPress?: () => void;
    };
  }>;
} & NavigationProp;

export const TryAgainModal = (props: TryAgainModalProps) => {
  const { navigation, route } = props;
  const handleTryAgainPress = () => {
    navigation?.goBack();
    route?.params?.onTryAgainPress?.();
  };
  return (
    <Modal icon={<WarningIcon />} title="Something went wrong" {...props}>
      <Typography color="gray" style={[styles.subtitle]}>
        {route?.params?.errorMessage}
      </Typography>
      <View style={[styles.actionButton, styles.flexDirectionRowProvider]}>
        <Button
          style={[styles.notLastButtonMargin]}
          onPress={() => navigation?.goBack()}
          title="CANCEL"
          color="red"
        />
        <Button onPress={handleTryAgainPress} title="TRY AGAIN" />
      </View>
    </Modal>
  );
};
