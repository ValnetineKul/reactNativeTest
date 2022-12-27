import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { images } from "../../../assets/images";
import { Typography, Button } from "../../../components";
import { routes } from "../../../constants";
import { NavigationProp } from "../../../types";
import { styles } from "../MyCart.styles";

type MyCartLoginProps = {} & NavigationProp;

export const MyCartLogin = ({ navigation }: MyCartLoginProps) => {
  const handleLoginPress = () => {
    navigation?.navigate(routes.auth.login);
  };

  const handleSignUpPress = () => {
    navigation?.navigate(routes.auth.signUp);
  };
  return (
    <>
      <Image source={images.avatar} />
      <Typography variant="h6" style={styles.title} color="gray">
        Login First!
      </Typography>
      <Typography color="gray" style={styles.subTitle}>
        Login first to view your cart
      </Typography>
      <Button
        title="LOGIN NOW"
        style={styles.actionButton}
        fullWidth
        onPress={handleLoginPress}
      />
      <TouchableOpacity style={styles.secondaryAction} onPress={handleSignUpPress}>
        <Typography color="blue">New here? Sign Up</Typography>
      </TouchableOpacity>
    </>
  );
};
