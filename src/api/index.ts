import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";
import {
  GetProductDetailsReq,
  GetProductsReq,
  LoginReq,
  LoginRes,
  ProductRes,
  ProductsRes,
  SignUpReq,
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
  getProducts({
    page,
    perPage,
  }: GetProductsReq): Promise<AxiosResponse<ProductsRes>> {
    return ajax({
      method: "get",
      url: URL.products,
      params: {
        page: page || 1,
        per_page: perPage || 24,
      },
    });
  },
  getProductDetails({
    id,
  }: GetProductDetailsReq): Promise<AxiosResponse<ProductRes>> {
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
};
