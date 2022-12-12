import { Formik } from "formik";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Button, Input, Modal, Typography } from "../../../../components";
import { modalRoutes } from "../../../../constants";
import { useAuthContext } from "../../../../context";
import { NavigationProp } from "../../../../types";
import { styles } from "../ModalCommon.styles";
import {
  formHelper,
  initialFormValues,
  validationSchema,
} from "./SignUpModal.helper";

export const SignUpModal = (props: NavigationProp) => {
  const { navigation } = props;
  const { handleSignUp } = useAuthContext();

  const handleLoginPress = () => {
    navigation?.navigate(modalRoutes.login);
  };

  const handleSubmitForm = async (values: typeof initialFormValues) => {
    const { fullName, emailAddress, password, confirmPassword } = values;

    if (handleSignUp) {
      const isSignUpSuccessful = await handleSignUp({
        firstName: fullName,
        lastName: "",
        email: emailAddress,
        password,
        passwordConfirmation: confirmPassword,
        publicMetadata: {
          userSegment: "user",
        },
        privateMetadata: {
          hasAbandonedCart: false,
        },
      });

      if (isSignUpSuccessful) {
        navigation?.navigate(modalRoutes.login);
      }
    }
  };

  return (
    <Modal backgroundColor="white" {...props}>
      <Typography style={styles.loginSignUpTitle} color="blue" variant="h1">
        Ecomerce Store
      </Typography>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          return (
            <>
              {formHelper.map(({ id, label, type }, index) => {
                return (
                  <Input
                    key={id}
                    style={index > 0 ? styles.inputMargin : undefined}
                    label={label}
                    onChange={handleChange(id)}
                    value={values[id]}
                    error={errors[id]}
                    type={type}
                  />
                );
              })}
              <Button
                onPress={() => handleSubmit()}
                title="SIGN UP"
                fullWidth
                style={[styles.actionButton]}
              />
            </>
          );
        }}
      </Formik>
      <TouchableOpacity style={[styles.inputMargin]} onPress={handleLoginPress}>
        <Typography color="blue">Already have account? Sign In</Typography>
      </TouchableOpacity>
    </Modal>
  );
};
