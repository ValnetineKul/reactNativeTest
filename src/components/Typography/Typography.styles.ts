import { StyleSheet } from "react-native";
import {
  COLOR_TEXT_BLACK,
  COLOR_TEXT_BLUE,
  COLOR_TEXT_GRAY,
  COLOR_TEXT_WHITE,
} from "../../theme";
import { FontWeights } from "./Typography.types";

export const styles = StyleSheet.create({
  h1: {
    fontWeight: FontWeights.fontWeightBold,
    fontSize: 40,
    lineHeight: 50,
  },
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {
    fontWeight: FontWeights.fontWeightMedium,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  body1: {
    fontWeight: FontWeights.fontWeightRegular,
    fontSize: 15,
    lineHeight: 20,
  },
  body2: {
    fontWeight: FontWeights.fontWeightBold,
    fontSize: 15,
    lineHeight: 20,
  },
  white: {
    color: COLOR_TEXT_WHITE,
  },
  black: {
    color: COLOR_TEXT_BLACK,
  },
  gray: {
    color: COLOR_TEXT_GRAY,
  },
  blue: {
    color: COLOR_TEXT_BLUE,
  },
});
