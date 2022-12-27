import { StyleSheet } from "react-native";
import { COLOR_TEXT_GRAY } from "../../../../theme";

export const styles = StyleSheet.create({
  arrowContainer: {
    padding: 16,
  },
  arrowTop: {
    width: 3,
    height: 16,
    backgroundColor: COLOR_TEXT_GRAY,
    transform: [{ rotateZ: "30deg" }, { translateY: 2 }],
  },
  arrowBottom: {
    width: 3,
    height: 16,
    backgroundColor: COLOR_TEXT_GRAY,
    transform: [{ rotateZ: "330deg" }, { translateY: -2 }],
  },
  right: {
    transform: [{ rotateZ: "180deg" }],
  },
});
