export enum URLNames {
  products = "products",
  productDetails = "productDetails",
  signUp = "signUp",
  login = "login",
}

export const URL = {
  [URLNames.products]: "/api/v2/storefront/products",
  [URLNames.productDetails]: (id: string | number) =>
    `/api/v2/storefront/products/${id}`,
  [URLNames.signUp]: "/api/v2/storefront/account",
  [URLNames.login]: "/spree_oauth/token",
};
