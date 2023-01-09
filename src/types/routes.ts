import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { ViewStyle } from "react-native";

export type MainStackParamList = {
  "main/products": undefined;
  "main/search": undefined;
  "main/drawer": undefined;
  "main/product": { productId?: string };
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
  logout:
    | {
        onLogoutPress?: () => void;
      }
    | undefined;
  "auth/login": undefined;
  "auth/signUp": undefined;
  "auth/forgotPassword": undefined;
};

export type MyProfileStackParamList = {
  "myProfile/profile": undefined;
  loginRequired: undefined;
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

export type AllStacks = MainStackParamList & MyProfileStackParamList;

export type RootDrawerParamList = {
  main: NavigatorScreenParams<MainStackParamList>;
  myProfile: NavigatorScreenParams<MyProfileStackParamList>;
  myWishlist: NavigatorScreenParams<MyWishListStackParamList>;
  myCart: NavigatorScreenParams<MyCartStackParamList>;
  myOrders: NavigatorScreenParams<MyOrdersStackParamList>;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> = DrawerScreenProps<
  RootDrawerParamList,
  T
>;

export type MainStackProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  StackScreenProps<MainStackParamList, T>,
  RootDrawerScreenProps<keyof RootDrawerParamList>
>;

export type MyProfileStackProps<T extends keyof MyProfileStackParamList> = CompositeScreenProps<
  StackScreenProps<MyProfileStackParamList, T>,
  DrawerScreenProps<RootDrawerParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
