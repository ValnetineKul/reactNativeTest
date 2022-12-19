import { FlexStyle } from "react-native";

type Props = {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
};

export const flexHelper = ({
  justifyContent,
  alignItems,
  flexDirection,
}: Props): FlexStyle => ({
  flex: 1,
  justifyContent: (justifyContent || "center") as FlexStyle["justifyContent"],
  alignItems: (alignItems || "center") as FlexStyle["alignItems"],
  flexDirection: (flexDirection || "row") as FlexStyle["flexDirection"],
});
