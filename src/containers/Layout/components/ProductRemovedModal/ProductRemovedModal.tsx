import React from "react";
import { Button, Modal, Typography } from "../../../../components";
import { SuccessIcon } from "../../../../theme/icons/components";
import { NavigationProp } from "../../../../types";
import { styles } from "../ModalCommon.styles";

export const ProductRemovedModal = (props: NavigationProp) => {
  const handleOkButtonPress = () => {
    props.navigation?.goBack();
  };
  return (
    <Modal icon={<SuccessIcon />} title="Your Cart status" {...props}>
      <Typography color="gray" style={[styles.subtitle]}>
        Product removed from your cart successfully
      </Typography>
      <Button
        onPress={handleOkButtonPress}
        title="OK"
        style={[styles.actionButton]}
      />
    </Modal>
  );
};
