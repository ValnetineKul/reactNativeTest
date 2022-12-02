import { StyleSheet } from "react-native";
import { COLOR_CARD_BOX_SHADOW, COLOR_TEXT_WHITE } from "../../theme";

const commonStyles = {
  shadowColor: COLOR_CARD_BOX_SHADOW,
  backgroundColor: COLOR_TEXT_WHITE,
  shadowOffset: { width: 2, height: 4 },
};

export const styles = StyleSheet.create({
  horizontalFull: {
    ...commonStyles,
    shadowOpacity: 0.3,
    height: 55,
  },
  default: {
    ...commonStyles,
    padding: 5,
    borderRadius: 5,
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});
