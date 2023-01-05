import { StyleSheet } from "react-native";
import {
  COLOR_CARD_BOX_SHADOW,
  COLOR_ERROR,
  COLOR_TEXT_BLUE,
  COLOR_TEXT_GRAY,
} from "../../theme";
import { flexHelper } from "../../utils";
import { FontWeights } from "../Typography";

export const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: COLOR_TEXT_BLUE,
    borderRadius: 4,
    shadowColor: COLOR_CARD_BOX_SHADOW,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    width: 125,
    height: 40,
  },
  fullWidth: {
    width: "100%",
  },
  title: {
    fontWeight: FontWeights.fontWeightMedium,
    textAlign: "center",
  },
  startAdorment: {
    marginRight: 16,
  },
  endAdorment: {
    marginLeft: 16,
  },
  flexProvider: {
    ...flexHelper({}),
  },
  blue: {
    backgroundColor: COLOR_TEXT_BLUE,
  },
  gray: {
    backgroundColor: COLOR_TEXT_GRAY,
  },
  red: {
    backgroundColor: COLOR_ERROR,
  },
});
