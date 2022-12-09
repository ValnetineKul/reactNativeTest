import React from "react";
import { View } from "react-native";
import { Button, Modal, Typography } from "../../../../components";
import { WarningIcon } from "../../../../theme/icons/components";
import { NavigationProp } from "../../../../types";

export const LoginModal = (props: NavigationProp) => {
  const handleOkButtonPress = () => {
    props.navigation?.goBack();
  };
  return (
    <Modal icon={<WarningIcon />} title="Login To Continue" {...props}>
      <Typography color="gray" style={{ textAlign: "center", maxWidth: 190 }}>
        Please login to add product in your cart
      </Typography>
      <View style={{ marginTop: 24, flexDirection: "row" }}>
        <Button
          style={{ marginRight: 20 }}
          onPress={handleOkButtonPress}
          title="LOGIN"
        />
        <Button onPress={handleOkButtonPress} title="SIGN UP" />
      </View>
    </Modal>
  );
};
