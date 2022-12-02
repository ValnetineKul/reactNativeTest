import { Dimensions, StyleSheet } from "react-native";
import { COLOR_CARD_BOX_SHADOW, COLOR_TEXT_BLUE } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: Dimensions.get("window").width - 32,
    position: "absolute",
    bottom: 48,
    left: 16,
    padding: 12,
    backgroundColor: COLOR_TEXT_BLUE,
    borderRadius: 4,
    shadowColor: COLOR_CARD_BOX_SHADOW,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
  },
});
