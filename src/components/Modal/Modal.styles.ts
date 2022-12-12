import { StyleSheet } from "react-native";
import { COLOR_TEXT_WHITE } from "../../theme";
import { flexHelper } from "../../utils";
import { FontWeights } from "../Typography";

export const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: 24,
    paddingHorizontal: 32,
    paddingBottom: 32,
    backgroundColor: COLOR_TEXT_WHITE,
    borderRadius: 5,
    height: 275,
    ...flexHelper({ flexDirection: "column" }),
  },
  iconContainer: {},
  title: {
    fontWeight: FontWeights.fontWeightBold,
    marginTop: 16,
    marginBottom: 10,
    textAlign: "center",
  },
});
