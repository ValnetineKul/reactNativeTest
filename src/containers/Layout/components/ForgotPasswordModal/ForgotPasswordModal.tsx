import { Formik } from "formik";
import React from "react";
import { Button, Input, Modal, Typography } from "../../../../components";
import { NavigationProp } from "../../../../types";
import { styles } from "../ModalCommon.styles";
import {
  formHelper,
  initialFormValues,
  validationSchema,
} from "./ForgotPasswordModal.helper";
import { TouchableOpacity } from "react-native";
import { routes } from "../../../../constants";

export const ForgotPasswordModal = (props: NavigationProp) => {
  const handleTitlePress = () => {
    props.navigation?.navigate(routes.main.products);
  };

  const handleSubmitForm = (values: typeof initialFormValues) => {
    console.log(values);
  };
  return (
    <Modal backgroundColor="white" {...props}>
      <TouchableOpacity onPress={handleTitlePress}>
        <Typography style={styles.loginSignUpTitle} color="blue" variant="h1">
          Ecomerce Store
        </Typography>
      </TouchableOpacity>
      <Typography style={[styles.forgotPasswordText]}>
        Enter your email id and we will send you an email to change the password
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
                title="SUBMIT"
                fullWidth
                style={[styles.actionButton]}
              />
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};
