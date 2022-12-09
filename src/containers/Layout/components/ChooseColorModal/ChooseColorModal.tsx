import React from "react";
import { Button, Modal, Typography } from "../../../../components";
import { ErrorIcon } from "../../../../theme/icons";
import { NavigationProp } from "../../../../types";

export const ChooseColorModal = (props: NavigationProp) => {
  const handleOkButtonPress = () => {
    props.navigation?.goBack();
  };
  return (
    <Modal icon={<ErrorIcon />} title="Select color" {...props}>
      <Typography color="gray" style={{ textAlign: "center", maxWidth: 190 }}>
        Please select your color to add this item in your cart
      </Typography>
      <Button onPress={handleOkButtonPress} title="OK" style={{ marginTop: 24 }} />
    </Modal>
  );
};
