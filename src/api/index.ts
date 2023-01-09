import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance, RawAxiosRequestHeaders } from "axios";
import {
  AccountRes,
  GetProductDetailsReq,
  GetProductsReq,
  LoginReq,
  LoginRes,
  ProductRes,
  ProductsRes,
  SignUpReq,
  UpdateAccountReq,
} from "../types";
import { URL } from "../constants";
import { snakeize } from "../utils";

const client: AxiosInstance = axios.create({
  baseURL: "https://demo.spreecommerce.org",
  headers: {},
});

export default async function ajax(requestConfig: AxiosRequestConfig) {
  try {
    return await client(requestConfig);
  } catch (err) {
    throw err;
  }
}

export const baseApi = {
  getProducts(params: GetProductsReq): Promise<AxiosResponse<ProductsRes>> {
    return ajax({
      method: "get",
      url: URL.products,
      params: {
        page: params?.page || 1,
        per_page: params?.perPage || 24,
        ...params,
      },
    });
  },
  getProductDetails({ id }: GetProductDetailsReq): Promise<AxiosResponse<ProductRes>> {
    return ajax({
      method: "get",
      url: URL.productDetails(id),
      params: {
        id,
      },
    });
  },
  signUp(userData: SignUpReq): Promise<AxiosResponse<any>> {
    const snakeiezedUserData = snakeize(userData);
    return ajax({
      method: "post",
      url: URL.signUp,
      data: {
        user: {
          ...snakeiezedUserData,
        },
      },
    });
  },
  login(userData: LoginReq): Promise<AxiosResponse<LoginRes>> {
    const snakeiezedUserData = snakeize(userData);
    return ajax({
      method: "post",
      url: URL.login,
      data: {
        ...snakeiezedUserData,
        grant_type: "password",
      },
    });
  },
  getAccount(headers: RawAxiosRequestHeaders): Promise<AxiosResponse<AccountRes>> {
    return ajax({
      method: "get",
      url: URL.getAccount,
      headers,
    });
  },
  updateAccount(
    updatedAccountData: UpdateAccountReq,
    headers: RawAxiosRequestHeaders
  ): Promise<AxiosResponse<AccountRes>> {
    const snakeiezedUserData = snakeize(updatedAccountData);
    return ajax({
      method: "patch",
      url: URL.getAccount,
      data: {
        user: {
          ...snakeiezedUserData,
        },
      },
      headers,
    });
  },
};
