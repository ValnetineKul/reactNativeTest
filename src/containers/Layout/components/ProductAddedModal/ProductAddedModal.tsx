import React from "react";
import { Button, Modal } from "../../../../components";
import { SuccessIcon } from "../../../../theme/icons/components";
import { NavigationProp } from "../../../../types";

export const ProductAddedModal = (props: NavigationProp) => {
  const handleOkButtonPress = () => {
    props.navigation?.goBack();
  };
  return (
    <Modal icon={<SuccessIcon />} title="Product added to your cart" {...props}>
      <Button onPress={handleOkButtonPress} title="OK" style={{ marginTop: 24 }} />
    </Modal>
  );
};
