import React from "react";
import { Button, Modal, Typography } from "../../../../components";
import { ErrorIcon } from "../../../../theme/icons";
import { NavigationProp } from "../../../../types";
import { styles } from "../ModalCommon.styles";

export const ChooseColorModal = (props: NavigationProp) => {
  const handleOkButtonPress = () => {
    props.navigation?.goBack();
  };
  return (
    <Modal icon={<ErrorIcon />} title="Select color" {...props}>
      <Typography color="gray" style={[styles.subtitle]}>
        Please select your color to add this item in your cart
      </Typography>
      <Button
        onPress={handleOkButtonPress}
        title="OK"
        style={[styles.actionButton]}
      />
    </Modal>
  );
};
