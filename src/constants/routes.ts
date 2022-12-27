export const routes = {
  main: {
    root: "main",
    products: "main/products",
    search: "main/search",
    drawerMain: "main/drawer",
    productDetails: "main/product/:id",
  },
  myProfile: {
    root: "myProfile",
    profile: "myProfile/profile",
  },
  myWishlist: {
    root: "myWishlist",
    wishlist: "myWishlist/wishlist",
  },
  myCart: {
    root: "myCart",
    cart: "myCart/cart",
    loginRequired: "myCart/loginRequired",
    orderConfirmation: "myCart/orderConfirmation",
  },
  myOrders: {
    root: "myOrders",
    orders: "myOrders/orders",
    loginRequired: "myOrders/loginRequired",
  },
  auth: {
    login: "auth/login",
    signUp: "auth/signUp",
    forgotPassword: "auth/forgotPassword",
  },
};

export const modalRoutes = {
  chooseColor: "chooseColor",
  loginRequired: "loginRequired",
  productAdded: "productAdded",
  productRemoved: "productRemoved",
  tryAgain: "tryAgain",
};
