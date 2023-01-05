import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { ViewStyle } from "react-native";

export type MainStackParamList = {
  "main/products": undefined;
  "main/search": undefined;
  "main/drawer": undefined;
  "main/product": { productId?: string } | undefined;
  chooseColor: undefined;
  loginRequired: undefined;
  productAdded: undefined;
  productRemoved: undefined;
  tryAgain:
    | {
        onTryAgainPress?: () => void;
        errorMessage?: string;
        actionButtonText?: string;
      }
    | undefined;
  "auth/login": undefined;
  "auth/signUp": undefined;
  "auth/forgotPassword": undefined;
};

export type MyProfileStackParamList = {
  "myProfile/profile": undefined;
};

export type MyWishListStackParamList = {
  "myWishlist/wishlist": undefined;
};

export type MyCartStackParamList = {
  "myCart/cart": undefined;
  "myCart/loginRequired":
    | {
        style?: ViewStyle | ViewStyle[];
        type?: "cart" | "order";
      }
    | undefined;
  "myCart/orderConfirmation": undefined;
};

export type MyOrdersStackParamList = {
  "myOrders/orders": undefined;
  "myOrders/loginRequired":
    | {
        style?: ViewStyle | ViewStyle[];
        type?: "cart" | "order";
      }
    | undefined;
};

export type RootDrawerParamList = {
  main: undefined;
  myProfile: undefined;
  myWishlist: undefined;
  myCart: undefined;
  myOrders: undefined;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

export type ProductsProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  DrawerScreenProps<MainStackParamList, T>,
  RootDrawerScreenProps<keyof RootDrawerParamList>
>;

export type ProductProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  DrawerScreenProps<MainStackParamList, T>,
  RootDrawerScreenProps<keyof RootDrawerParamList>
>;
