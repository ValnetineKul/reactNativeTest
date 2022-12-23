import { Formik } from "formik";
import React, { useCallback, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
  ApiCallAnimatedButton,
  Button,
  Input,
  Modal,
  Typography,
} from "../../../../components";
import { URLNames, routes } from "../../../../constants";
import { useAuthContext } from "../../../../context";
import { ArrowLeftIcon } from "../../../../theme/icons";
import { NavigationProp, RequestStatus } from "../../../../types";
import { styles } from "../ModalCommon.styles";
import {
  formHelper,
  initialFormValues,
  validationSchema,
} from "./LoginModal.helper";
import { useRequestStatusContext } from "../../../../context/RequestStatusContext";

export const LoginModal = (props: NavigationProp) => {
  const { navigation } = props;

  const handleForgotPasswordPress = () => {
    navigation?.navigate(routes.auth.forgotPassword);
  };

  const handleSignUpPress = () => {
    navigation?.navigate(routes.auth.signUp);
  };

  const handleTitlePress = () => {
    navigation?.navigate(routes.main.products);
  };

  const { handleLogin } = useAuthContext();

  const { requestStatuses, dispatch } = useRequestStatusContext();

  const resetRequest = useCallback(() => {
    dispatch?.({
      type: URLNames.login,
      payload: {
        status: RequestStatus.RESET,
      },
    });
  }, [dispatch]);

  const handleSubmitForm = async (values: typeof initialFormValues) => {
    if (handleLogin) {
      const { emailAddress, password } = values;
      handleLogin({
        username: emailAddress,
        password,
      });
    }
  };

  const handleSuccessLogin = useCallback(() => {
    navigation?.navigate(routes.main.products);
  }, [navigation]);

  const handleFailLogin = useCallback(() => {
    // navigation?.navigate(routes.productsMain);
  }, []);

  useEffect(() => {
    return () => {
      resetRequest();
    };
  }, [resetRequest]);

  return (
    <Modal backgroundColor="white" {...props}>
      <TouchableOpacity onPress={handleTitlePress}>
        <Typography style={styles.loginSignUpTitle} color="blue" variant="h1">
          Ecomerce Store
        </Typography>
      </TouchableOpacity>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
        validateOnBlur
      >
        {({
          handleChange,
          handleSubmit,
          setFieldTouched,
          values,
          errors,
          touched,
          dirty,
          isValid,
        }) => {
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
                    onBlur={() => setFieldTouched(id)}
                  />
                );
              })}
              <TouchableOpacity
                style={[styles.forgotPasswordButton]}
                onPress={handleForgotPasswordPress}
                disabled
              >
                <Typography color="blue">Forgot Password?</Typography>
              </TouchableOpacity>
              <ApiCallAnimatedButton
                onPress={() => {
                  if (
                    requestStatuses?.[URLNames.login].status === RequestStatus.ERROR
                  ) {
                    resetRequest();
                    return;
                  }
                  handleSubmit();
                }}
                title="SIGN IN"
                fullWidth
                style={[styles.actionButton]}
                disabled={
                  (!isValid && dirty) ||
                  !dirty ||
                  requestStatuses?.[URLNames.login].status === RequestStatus.REQUEST
                }
                status={requestStatuses?.[URLNames.login].status}
                onFail={handleFailLogin}
                onSuccess={handleSuccessLogin}
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
