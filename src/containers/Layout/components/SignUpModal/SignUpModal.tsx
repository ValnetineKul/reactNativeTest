import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  ApiCallAnimatedButton,
  Input,
  Modal,
  Typography,
} from "../../../../components";
import { URLNames, modalRoutes, routes } from "../../../../constants";
import { useAuthContext, useRequestStatusContext } from "../../../../context";
import { NavigationProp, RequestStatus } from "../../../../types";
import { styles } from "../ModalCommon.styles";
import {
  formHelper,
  initialFormValues,
  validationSchema,
} from "./SignUpModal.helper";

export const SignUpModal = (props: NavigationProp) => {
  const { navigation } = props;
  const { handleSignUp } = useAuthContext();

  const handleTitlePress = () => {
    navigation?.navigate(routes.main.products);
  };

  const { requestStatuses, dispatch } = useRequestStatusContext();
  const handleLoginPress = () => {
    navigation?.navigate(routes.auth.login);
  };

  const [lastSubmittedValues, setLastSubmittedValues] = useState(initialFormValues);

  const handleSubmitForm = useCallback(
    async (values: typeof initialFormValues) => {
      const { fullName, emailAddress, password, confirmPassword } = values;

      if (handleSignUp) {
        handleSignUp({
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
      }
    },
    [handleSignUp]
  );

  const handleSuccessSignUp = useCallback(() => {
    navigation?.navigate(routes.main.products);
  }, [navigation]);

  const resetRequest = useCallback(() => {
    dispatch?.({
      type: URLNames.signUp,
      payload: {
        status: RequestStatus.RESET,
      },
    });
  }, [dispatch]);

  const handleFailSignUp = useCallback(() => {
    navigation?.navigate(modalRoutes.tryAgain, {
      onTryAgainPress: () => handleSubmitForm(lastSubmittedValues),
      errorMessage: "My error message",
    });
    resetRequest();
  }, [handleSubmitForm, lastSubmittedValues, navigation, resetRequest]);

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
        onSubmit={(values) => {
          setLastSubmittedValues(values);
          handleSubmitForm(values);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
          dirty,
          touched,
          setFieldTouched,
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
              <ApiCallAnimatedButton
                onPress={() => {
                  if (
                    requestStatuses?.[URLNames.signUp].status === RequestStatus.ERROR
                  ) {
                    resetRequest();
                    return;
                  }
                  handleSubmit();
                }}
                title="SIGN UP"
                fullWidth
                style={[styles.actionButton]}
                disabled={
                  (!isValid && dirty) ||
                  !dirty ||
                  requestStatuses?.[URLNames.signUp].status === RequestStatus.REQUEST
                }
                status={requestStatuses?.signUp.status}
                onSuccess={handleSuccessSignUp}
                onFail={handleFailSignUp}
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
