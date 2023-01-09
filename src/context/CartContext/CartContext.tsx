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
  handleAddToCart?: () => void;
};

export const CartContext = React.createContext<AuthInfo>({});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const { updateRequestStatusCall } = useRequestStatusContext();

  const handleAddToCart = useCallback(() => {}, []);

  const currentCart = useMemo(
    () => ({
      handleAddToCart,
    }),
    [handleAddToCart]
  );

  return <CartContext.Provider value={currentCart}>{children}</CartContext.Provider>;
};

export const useCartContext = (): AuthInfo => {
  return useContext(CartContext) ?? {};
};
