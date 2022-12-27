import { StyleSheet } from "react-native";
import {
  COLOR_CARD_BOX_SHADOW,
  COLOR_ERROR,
  COLOR_TEXT_BLUE,
  COLOR_TEXT_GRAY,
  COLOR_TEXT_WHITE,
} from "../../theme";
import { flexHelper } from "../../utils";
import { FontWeights } from "../Typography";

export const styles = StyleSheet.create({
  animatedButtonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: COLOR_TEXT_BLUE,
  },
  button: {
    padding: 12,
    backgroundColor: COLOR_TEXT_BLUE,
    borderRadius: 4,
    shadowColor: COLOR_CARD_BOX_SHADOW,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    width: 125,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  title: {
    fontWeight: FontWeights.fontWeightMedium,
    textAlign: "center",
    lineHeight: 18,
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
  loaderContainer: {
    ...flexHelper({}),
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderDot: {
    width: 4,
    height: 4,
    borderRadius: 50,
    backgroundColor: COLOR_TEXT_WHITE,
  },
  crossContainer: {
    position: "absolute",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    right: 3,
  },
  crossLeft: {
    position: "absolute",
    transform: [{ rotateZ: "45deg" }],
    width: 3,
    backgroundColor: COLOR_TEXT_WHITE,
    borderRadius: 50,
  },
  crossRight: {
    position: "absolute",
    transform: [{ rotateZ: "135deg" }],
    width: 3,
    backgroundColor: COLOR_TEXT_WHITE,
    borderRadius: 50,
  },
  successFailText: {
    color: COLOR_TEXT_WHITE,
    fontWeight: FontWeights.fontWeightMedium,
    textAlign: "center",
  },
  successFailTextContainer: {
    position: "absolute",
  },
});
