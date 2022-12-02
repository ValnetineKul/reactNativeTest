import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";
import {
  GetProductDetailsReq,
  GetProductsReq,
  ProductRes,
  ProductsRes,
} from "../types";
import { URL } from "./URLs";

const client: AxiosInstance = axios.create({
  baseURL: "https://demo.spreecommerce.org/api/v2/storefront",
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
};
