export enum URLNames {
  products = "products",
  productDetails = "productDetails",
  signUp = "signUp",
  login = "login",
  createCart = "createCart",
  addToCart = "addToCart",
  removeFromCart = "removeFromCart",
  getAccount = "getAccount",
  updateAccount = "updateAccount",
}

export const URL = {
  [URLNames.products]: "/api/v2/storefront/products",
  [URLNames.productDetails]: (id: string | number) =>
    `/api/v2/storefront/products/${id}`,
  [URLNames.signUp]: "/api/v2/storefront/account",
  [URLNames.login]: "/spree_oauth/token",
  [URLNames.createCart]: "/api/v2/storefront/cart",
  [URLNames.addToCart]: "",
  [URLNames.removeFromCart]: "",
  [URLNames.getAccount]: "/api/v2/storefront/account",
  [URLNames.updateAccount]: "/api/v2/storefront/account",
};
