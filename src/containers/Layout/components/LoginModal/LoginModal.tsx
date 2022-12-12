import { Formik } from "formik";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Button, Input, Modal, Typography } from "../../../../components";
import { modalRoutes, routes } from "../../../../constants";
import { useAuthContext } from "../../../../context";
import { ArrowLeftIcon } from "../../../../theme/icons";
import { NavigationProp } from "../../../../types";
import { styles } from "../ModalCommon.styles";
import {
  formHelper,
  initialFormValues,
  validationSchema,
} from "./LoginModal.helper";

export const LoginModal = (props: NavigationProp) => {
  const { navigation } = props;

  const handleForgotPasswordPress = () => {
    navigation?.navigate(modalRoutes.forgotPassword);
  };

  const handleSignUpPress = () => {
    navigation?.navigate(modalRoutes.signUp);
  };

  const { handleLogin } = useAuthContext();

  const handleSubmitForm = async (values: typeof initialFormValues) => {
    if (handleLogin) {
      const { emailAddress, password } = values;
      const isSuccessfulLogin = await handleLogin({
        username: emailAddress,
        password,
      });

      if (isSuccessfulLogin) {
        navigation?.navigate(routes.main);
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
        {({ handleChange, handleSubmit, values, errors, touched }) => {
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
                    error={touched[id] ? errors[id] : undefined}
                    type={type}
                  />
                );
              })}
              <TouchableOpacity
                style={[styles.forgotPasswordButton]}
                onPress={handleForgotPasswordPress}
              >
                <Typography color="blue">Forgot Password?</Typography>
              </TouchableOpacity>
              <Button
                onPress={() => handleSubmit()}
                title="SIGN IN"
                fullWidth
                style={[styles.actionButton]}
              />
            </>
          );
        }}
      </Formik>
      <TouchableOpacity style={[styles.inputMargin]} onPress={handleSignUpPress}>
        <Typography color="blue">New here? Sign Up</Typography>
      </TouchableOpacity>
      <Button
        style={styles.skipLoginButton}
        title="SKIP LOGIN"
        endAdorment={<ArrowLeftIcon style={styles.skipLoginIcon} />}
        fullWidth
        color="gray"
      />
    </Modal>
  );
};
