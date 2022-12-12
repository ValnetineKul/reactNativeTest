import { ViewStyle } from "react-native";
import { BaseSvgProps } from "./BaseSvgIcon/BaseSvgIcon.types";

export type IconProps = Partial<Pick<BaseSvgProps, "color">> & {
  style?: ViewStyle | ViewStyle[];
};
