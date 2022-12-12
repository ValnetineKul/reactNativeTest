import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { baseApi } from "../../api";
import { validStatuses } from "../../constants";
import { LoginReq, LoginRes, Nullable, SignUpReq } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage/src";

export type AuthInfo = {
  handleLogin?: (userData: LoginReq) => Promise<boolean>;
  handleSignUp?: (userData: SignUpReq) => Promise<boolean>;
  userId?: number;
  loginData?: Nullable<LoginRes>;
};
const USER_LOGIN_DATA_STORAGE_KEY = "userLoginData";

export const AuthContext = React.createContext<AuthInfo>({});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userId, setUserId] = useState<number>();
  const [loginData, setLoginData] = useState<Nullable<LoginRes>>(null);

  const handleLogin = useCallback(async (userData: LoginReq) => {
    const { data, status } = await baseApi.login(userData);
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

    return isSuccessfulLogin;
  }, []);

  const handleSignUp = useCallback(async (userData: SignUpReq) => {
    const { data, status } = await baseApi.signUp(userData);
    setUserId(data.id);
    return validStatuses.indexOf(status) > -1;
  }, []);

  const handleCheckAsyncStorageForUserLoginData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(USER_LOGIN_DATA_STORAGE_KEY);
      if (value !== null) {
        const parsedData: LoginRes = JSON.parse(value);
        console.log(parsedData, "parsedData");

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
    handleCheckAsyncStorageForUserLoginData();
  }, [handleCheckAsyncStorageForUserLoginData]);

  return <AuthContext.Provider value={currentAuth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthInfo => {
  return useContext(AuthContext) ?? {};
};
