import { StyleSheet } from "react-native";
import { COLOR_LIGHT_GRAY, COLOR_TEXT_BLUE, COLOR_TEXT_WHITE } from "../../theme";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  loaderContainer: {
    ...flexHelper({}),
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  loaderDot: {
    width: 4,
    height: 4,
    borderRadius: 50,
    backgroundColor: COLOR_TEXT_WHITE,
  },
  fullScreenContainer: {
    backgroundColor: COLOR_LIGHT_GRAY,
  },
  fullScreenDot: {
    backgroundColor: COLOR_TEXT_BLUE,
  },
});
