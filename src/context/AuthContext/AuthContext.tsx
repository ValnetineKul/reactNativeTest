import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { baseApi } from "../../api";
import { URLNames, validStatuses } from "../../constants";
import { LoginReq, LoginRes, Nullable, SignUpReq } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage/src";
import { useRequestStatusContext } from "../RequestStatusContext";
import { AxiosResponse } from "axios";

export type AuthInfo = {
  handleLogin?: (userData: LoginReq) => Promise<void>;
  handleSignUp?: (userData: SignUpReq) => void;
  userId?: number;
  loginData?: Nullable<LoginRes>;
};
const USER_LOGIN_DATA_STORAGE_KEY = "userLoginData";

export const AuthContext = React.createContext<AuthInfo>({});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { updateRequestStatusCall } = useRequestStatusContext();
  const [userId, setUserId] = useState<number>();
  const [loginData, setLoginData] = useState<Nullable<LoginRes>>(null);

  const handleLogin = useCallback(
    async (userData: LoginReq) => {
      if (updateRequestStatusCall) {
        const { data, status } = await updateRequestStatusCall?.<
          AxiosResponse<LoginRes, any>
        >(() => baseApi.login(userData), URLNames.login);
        const isSuccessfulLogin = validStatuses.indexOf(status) > -1;
        if (isSuccessfulLogin) {
          try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem(USER_LOGIN_DATA_STORAGE_KEY, jsonValue);
          } catch (error) {
            console.log(error);
          }
          setLoginData(data);
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

  const handleCheckAsyncStorageForUserLoginData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(USER_LOGIN_DATA_STORAGE_KEY);
      if (value !== null) {
        const parsedData: LoginRes = JSON.parse(value);
        setLoginData(parsedData);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const currentAuth = useMemo(
    () => ({
      handleLogin,
      handleSignUp,
      userId,
      loginData,
    }),
    [handleLogin, handleSignUp, loginData, userId]
  );

  useEffect(() => {
    // handleCheckAsyncStorageForUserLoginData();
  }, [handleCheckAsyncStorageForUserLoginData]);

  return <AuthContext.Provider value={currentAuth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthInfo => {
  return useContext(AuthContext) ?? {};
};
