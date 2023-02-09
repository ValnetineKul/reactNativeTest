import { Formik } from "formik";
import React, { useCallback, useEffect, useMemo } from "react";
import { Image, RefreshControl } from "react-native";
import { styles } from "./MyProfile.styles";
import { MyProfileFields, formHelper, validationSchema } from "./MyProfile.helper";
import { Input, ApiCallAnimatedButton, Loader, Button } from "../../components";
import { images } from "../../assets/images";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useAuthContext, useRequestStatusContext } from "../../context";
import { URLNames } from "../../constants";
import { Optionable, RequestStatus } from "../../types";
import { MyProfileStackProps } from "../../types/routes";

const ADDRESS_SEPARATOR = "*";

export const MyProfile = ({ navigation }: MyProfileStackProps<"myProfile/profile">) => {
  const { requestStatuses, dispatch } = useRequestStatusContext();
  const {
    getAccountData,
    account,
    updateAccountData,
    handleLogout: handleAuthLogout,
    handleAccountImageChange,
  } = useAuthContext();

  const addressArray = useMemo(
    () => account?.data.relationships?.defaultShippingAddress?.data?.id.split(ADDRESS_SEPARATOR),
    [account?.data.relationships?.defaultShippingAddress?.data?.id]
  );

  const resetUpdateRequestStatus = useCallback(() => {
    dispatch?.({
      type: URLNames.updateAccount,
      payload: {
        status: RequestStatus.RESET,
      },
    });
  }, [dispatch]);

  const handleSubmitForm = async (values: Record<keyof typeof MyProfileFields, Optionable<string>>) => {
    const { firstName, lastName, email, city, street, flat } = values;

    const addressString = [city, street, flat].reduce((acc, curr) => {
      if (acc?.length) {
        acc += `${ADDRESS_SEPARATOR}${curr}`;
      }

      if (!acc?.length && curr) {
        acc += curr;
      }

      return acc;
    }, "");

    updateAccountData?.({
      ...(firstName && { firstName: firstName }),
      ...(lastName && { lastName: lastName }),
      ...(email && { email }),
      ...(addressString && { billAddressId: addressString }),
      ...(addressString && { shipAddressId: addressString }),
    });
  };

  const handleLogout = () => {
    navigation.navigate("myProfile", {
      screen: "logout",
      params: {
        onLogoutPress: async () => {
          navigation.goBack();
          setTimeout(() => {
            navigation.navigate("main", {
              screen: "main/products",
            });
            handleAuthLogout?.();
          }, 500);
        },
      },
    });
  };

  useEffect(() => {
    if (getAccountData) {
      getAccountData();
    }
  }, [getAccountData]);

  const isAccountLoading = requestStatuses?.[URLNames.getAccount].status === RequestStatus.REQUEST;
  const isUpdateError = requestStatuses?.[URLNames.updateAccount].status === RequestStatus.ERROR;

  const formikData = useMemo(
    () => ({
      [MyProfileFields.firstName]: account?.data?.attributes?.firstName,
      [MyProfileFields.lastName]: account?.data?.attributes?.lastName,
      [MyProfileFields.email]: account?.data?.attributes?.email,
      [MyProfileFields.city]: addressArray?.[0],
      [MyProfileFields.street]: addressArray?.[1],
      [MyProfileFields.flat]: addressArray?.[2],
    }),
    [
      account?.data?.attributes?.email,
      account?.data?.attributes?.firstName,
      account?.data?.attributes?.lastName,
      addressArray,
    ]
  );

  console.log(account?.imageUri, "ACCOUNT");

  if (isAccountLoading || !account) {
    return <Loader fullScreen />;
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={<RefreshControl refreshing={isAccountLoading} onRefresh={getAccountData} />}
      contentContainerStyle={[styles.myProfileContainer]}
    >
      <Formik
        initialValues={formikData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
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
          resetForm,
        }) => {
          return (
            <>
              <Input
                label={formHelper[0].label}
                onChange={handleChange(formHelper[0].id)}
                value={values[formHelper[0].id]}
                error={touched[formHelper[0].id] ? errors[formHelper[0].id] : undefined}
                type={formHelper[0].type}
                onBlur={() => setFieldTouched(formHelper[0].id)}
                style={[styles.inputMargin]}
              />
              <Input
                label={formHelper[1].label}
                onChange={handleChange(formHelper[1].id)}
                value={values[formHelper[1].id]}
                error={touched[formHelper[1].id] ? errors[formHelper[1].id] : undefined}
                type={formHelper[1].type}
                onBlur={() => setFieldTouched(formHelper[0].id)}
              />
              <TouchableOpacity style={[styles.profileImage]} onPress={handleAccountImageChange}>
                <Image
                  style={{ height: 120, width: 120, borderRadius: 60 }}
                  source={account?.imageUri ? { uri: account?.imageUri } : images.noProfileImage}
                />
              </TouchableOpacity>
              {formHelper.map(({ id, label, type }, index) => {
                if (index < 2) {
                  return null;
                }
                return (
                  <Input
                    key={id}
                    style={index < formHelper.length - 1 ? styles.inputMargin : undefined}
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
                  if (isUpdateError) {
                    resetUpdateRequestStatus();
                    return;
                  }
                  handleSubmit();
                }}
                title="UPDATE"
                fullWidth
                style={[styles.inputMargin, styles.updateButton, { opacity: Number(dirty) }]}
                disabled={
                  (!isValid && dirty) ||
                  !dirty ||
                  requestStatuses?.[URLNames.updateAccount].status === RequestStatus.REQUEST
                }
                status={requestStatuses?.[URLNames.updateAccount].status}
                onSuccess={() => {
                  setTimeout(() => {
                    resetForm({ values });
                  }, 1000);
                  setTimeout(() => {
                    resetUpdateRequestStatus();
                  }, 3000);
                }}
                onFail={() => {
                  setTimeout(() => {
                    resetUpdateRequestStatus();
                  }, 2000);
                }}
              />
              <Button title="LOGOUT" fullWidth onPress={handleLogout} />
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
};
