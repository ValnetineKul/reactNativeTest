import { StyleSheet } from "react-native";
import { COLOR_CARD_BOX_SHADOW, COLOR_TEXT_BLUE } from "../../theme";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  headerContainer: {
    ...flexHelper({ justifyContent: "space-between" }),
    backgroundColor: COLOR_TEXT_BLUE,
    shadowColor: COLOR_CARD_BOX_SHADOW,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    height: 55,
    paddingHorizontal: 16,
    flexGrow: 0,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  margin: {
    marginRight: 24,
  },
});
