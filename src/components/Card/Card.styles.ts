import { StyleSheet } from "react-native";
import { COLOR_CARD_BOX_SHADOW, COLOR_TEXT_WHITE } from "../../theme";

export const styles = StyleSheet.create({
  horizontalFull: {
    backgroundColor: COLOR_TEXT_WHITE,
  },
  default: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: COLOR_TEXT_WHITE,
  },
  shadowBox: {
    shadowColor: COLOR_CARD_BOX_SHADOW,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
