import { StyleSheet } from "react-native";
import { COLOR_TEXT_GRAY } from "../../theme";

export const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: COLOR_TEXT_GRAY,
    borderRadius: 4,
    position: "relative",
  },
  input: {
    height: 34,
    paddingLeft: 40,
  },
  startAdorment: {
    position: "absolute",
    left: 10,
    top: 6,
  },
});
