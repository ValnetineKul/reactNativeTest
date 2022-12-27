import { routes } from "../../constants";
import { HeaderType } from "./Header.types";

export const getHeaderType = (routeName: string): HeaderType => {
  if (
    routeName === routes.myCart.root ||
    routeName === routes.myCart.loginRequired
  ) {
    return "myCart";
  }
  if (routeName === routes.main.productDetails) {
    return "productDetails";
  }

  return "main";
};
