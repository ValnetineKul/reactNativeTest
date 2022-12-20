import { routes } from "../../constants";
import { HeaderType } from "./Header.types";

export const getHeaderType = (routeName: string): HeaderType => {
  if (routeName === routes.myCart || routeName === routes.myCartLogin) {
    return "myCart";
  }
  if (routeName === routes.productDetails) {
    return "productDetails";
  }

  return "main";
};