export const URL = {
  products: "/api/v2/storefront/products",
  productDetails: (id: string | number) => `/api/v2/storefront/products/${id}`,
  signUp: "/api/v2/storefront/account",
  login: "/spree_oauth/token",
};
