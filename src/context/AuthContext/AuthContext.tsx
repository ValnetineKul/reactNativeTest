import React, { PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { baseApi } from "../../api";
import { URLNames, validStatuses } from "../../constants";
import { AccountRes, LoginReq, LoginRes, Nullable, SignUpReq, UpdateAccountReq } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage/src";
import { useRequestStatusContext } from "../RequestStatusContext";
import { AxiosResponse } from "axios";
import { camelize } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";

export type AuthInfo = {
  handleLogin?: (userData: LoginReq) => Promise<void>;
  handleSignUp?: (userData: SignUpReq) => void;
  getAccountData?: () => void;
  userId?: number;
  authData?: Nullable<LoginRes>;
  account?: Nullable<AccountRes & { imageUri?: string }>;
  updateAccountData?: (accountData: UpdateAccountReq) => void;
  handleLogout?: () => void;
  handleAccountImageChange?: () => void;
};
const USER_LOGIN_DATA_STORAGE_KEY = "userAuthData";
const USER_ACCOUNT_IMAGES = "userAccountImages";

type UserAccountImage = { email: string; imageUri: string };

const MAX_USER_IMAGES_STORED_IN_ASYNC_STORAGE = 20;

export const AuthContext = React.createContext<AuthInfo>({});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { updateRequestStatusCall } = useRequestStatusContext();
  const [userId, setUserId] = useState<number>();
  const [authData, setAuthData] = useState<Nullable<LoginRes>>(null);
  const [account, setAccount] = useState<Nullable<AccountRes & { imageUri?: string }>>(null);

  const navigation = useNavigation();

  const handleLogout = useCallback(() => {
    setUserId(undefined);
    setAuthData(null);
    setAccount(null);
    AsyncStorage.multiRemove([USER_LOGIN_DATA_STORAGE_KEY]);
    navigation.navigate("main");
  }, [navigation]);

  const handleLogin = useCallback(
    async (userData: LoginReq) => {
      if (updateRequestStatusCall) {
        const { data, status } = await updateRequestStatusCall?.<AxiosResponse<LoginRes, any>>(
          () => baseApi.login(userData),
          URLNames.login
        );
        const camelizedData = camelize(data);
        const isSuccessfulLogin = validStatuses.indexOf(status) > -1;
        if (isSuccessfulLogin) {
          try {
            const jsonValue = JSON.stringify(camelizedData);
            await AsyncStorage.setItem(USER_LOGIN_DATA_STORAGE_KEY, jsonValue);
          } catch (error) {
            console.log(error);
          }
          setAuthData(camelizedData as LoginRes);
        }
      }
    },
    [updateRequestStatusCall]
  );

  const handleSignUp = useCallback(
    async (userData: SignUpReq) => {
      if (updateRequestStatusCall) {
        const { data } = await updateRequestStatusCall<AxiosResponse<any, any>>(
          () => baseApi.signUp(userData),
          URLNames.signUp
        );
        setUserId(data.id);
      }
    },
    [updateRequestStatusCall]
  );

  const handleCheckAsyncStorageForUserAuthData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(USER_LOGIN_DATA_STORAGE_KEY);
      if (value !== null) {
        const parsedData: LoginRes = JSON.parse(value);
        setAuthData(parsedData);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAccountData = useCallback(async () => {
    if (authData?.accessToken && updateRequestStatusCall) {
      const { data } = await updateRequestStatusCall?.<AxiosResponse<AccountRes, any>>(
        () => baseApi.getAccount({ Authorization: `Bearer ${authData?.accessToken}` }),
        URLNames.getAccount,
        handleLogout
      );
      const camelizedData = camelize<AccountRes & { imageUri: string }>(data);

      const userAccountImages = await AsyncStorage.getItem(USER_ACCOUNT_IMAGES);

      if (userAccountImages) {
        const parsedUserAccountImages: UserAccountImage[] = JSON.parse(userAccountImages);
        const loggedInUserImage = parsedUserAccountImages.find(
          ({ email }) => email === data.data.attributes.email
        );

        if (loggedInUserImage) {
          (camelizedData as AccountRes & { imageUri: string }).imageUri = loggedInUserImage?.imageUri;
        }
      }

      setAccount(camelizedData as AccountRes);
      // handleCheckAsyncStorageForUserAccountImage();
    }
  }, [authData?.accessToken, handleLogout, updateRequestStatusCall]);

  const updateAccountData = useCallback(
    async (updatedAccountData: UpdateAccountReq) => {
      if (authData?.accessToken && updateRequestStatusCall) {
        const { data, status } = await updateRequestStatusCall?.<AxiosResponse<AccountRes, any>>(
          () =>
            baseApi.updateAccount(updatedAccountData, { Authorization: `Bearer ${authData?.accessToken}` }),
          URLNames.updateAccount,
          handleLogout
        );
        const camelizedData = camelize(data);
        const isSuccessfulLogin = validStatuses.indexOf(status) > -1;
        if (isSuccessfulLogin) {
          setAccount({ ...(camelizedData as AccountRes), imageUri: account?.imageUri });
        }
      }
    },
    [account?.imageUri, authData?.accessToken, handleLogout, updateRequestStatusCall]
  );

  const handleAccountImageChange = useCallback(async () => {
    const image = await launchImageLibrary({
      mediaType: "photo",
    });

    if (image.assets?.[0].uri) {
      const imageUri = image.assets[0].uri;

      const userAccountImages = await AsyncStorage.getItem(USER_ACCOUNT_IMAGES);

      if (!account) {
        console.log("RETURN NO ACC");
        return;
      }

      if (!userAccountImages) {
        AsyncStorage.setItem(
          USER_ACCOUNT_IMAGES,
          JSON.stringify([{ email: account.data.attributes.email, imageUri }])
        );

        setAccount({
          ...account,
          imageUri,
        });

        return;
      }

      const parsedUserAccountImages: UserAccountImage[] = JSON.parse(userAccountImages || "");

      if (parsedUserAccountImages.length >= MAX_USER_IMAGES_STORED_IN_ASYNC_STORAGE) {
        parsedUserAccountImages.shift();
        parsedUserAccountImages.push({ email: account?.data?.attributes?.email, imageUri });
      } else {
        parsedUserAccountImages.push({ email: account?.data?.attributes?.email, imageUri });
      }

      AsyncStorage.setItem(USER_ACCOUNT_IMAGES, JSON.stringify(parsedUserAccountImages));

      setAccount({
        ...account,
        imageUri,
      });
    }
  }, [account]);

  const currentAuth = useMemo(
    () => ({
      handleLogin,
      handleSignUp,
      userId,
      authData,
      account,
      getAccountData,
      updateAccountData,
      handleLogout,
      handleAccountImageChange,
    }),
    [
      handleLogin,
      handleSignUp,
      userId,
      authData,
      account,
      getAccountData,
      updateAccountData,
      handleLogout,
      handleAccountImageChange,
    ]
  );

  useEffect(() => {
    // AsyncStorage.clear();
    handleCheckAsyncStorageForUserAuthData();
  }, [handleCheckAsyncStorageForUserAuthData]);

  return <AuthContext.Provider value={currentAuth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthInfo => {
  return useContext(AuthContext);
};
