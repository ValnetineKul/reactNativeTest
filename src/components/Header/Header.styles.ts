import { StyleSheet } from "react-native";
import { COLOR_CARD_BOX_SHADOW, COLOR_TEXT_BLUE } from "../../theme";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR_TEXT_BLUE,
    shadowColor: COLOR_CARD_BOX_SHADOW,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    height: 55,
    paddingHorizontal: 16,
  },
  leftControls: {
    position: "absolute",
    left: 16,
    top: 16,
    zIndex: 100,
  },
  rightControls: {
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 100,
  },
  title: {
    marginTop: 16,
    textAlign: "center",
  },
  flexProvider: {
    ...flexHelper({ justifyContent: "space-between" }),
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  margin: {
    marginRight: 24,
  },
});
