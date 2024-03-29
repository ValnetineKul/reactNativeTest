import { StyleSheet } from "react-native";
import { COLOR_ERROR, COLOR_TEXT_GRAY, COLOR_TEXT_WHITE } from "../../theme";

export const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: COLOR_TEXT_GRAY,
    borderRadius: 4,
    position: "relative",
    width: "100%",
  },
  input: {
    height: 34,
    paddingLeft: 16,
  },
  inputStartAdormentPadding: {
    paddingLeft: 40,
  },
  startAdorment: {
    zIndex: 10,
    position: "absolute",
    left: 10,
    top: 6,
  },
  loader: {
    // zIndex: 10,
    // position: "absolute",
    // right: "50%",
    // top: 18,
    // backgroundColor: "red",
  },
  labelContainer: {
    position: "absolute",
    top: 8,
    left: 14,
    paddingHorizontal: 4,
    backgroundColor: COLOR_TEXT_WHITE,
  },
  error: {
    borderColor: COLOR_ERROR,
  },
  errorText: {
    position: "absolute",
    bottom: -18,
  },
});
