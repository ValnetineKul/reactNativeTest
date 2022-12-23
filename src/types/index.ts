import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export * from "./response";
export * from "./requests";

export type Nullable<T> = T | null;
export type Optionable<T> = T | undefined;

export type NavigationProp = {
  drawerNavigation?: DrawerNavigationProp<any, any>;
  navigation?: NativeStackNavigationProp<any, any>;
};

export enum RequestStatus {
  INIT = "INIT",
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  RESET = "RESET",
}
