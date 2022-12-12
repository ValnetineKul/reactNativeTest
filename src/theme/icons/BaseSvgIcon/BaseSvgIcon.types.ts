import { ViewStyle } from "react-native";

export type BaseSvgProps = {
  width: string | number;
  height: string | number;
  color?: string;
  style?: ViewStyle | ViewStyle[];
};
