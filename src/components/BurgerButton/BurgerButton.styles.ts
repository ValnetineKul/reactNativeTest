import { StyleSheet } from "react-native";
import { COLOR_TEXT_WHITE } from "../../theme";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  burgerContainer: {
    width: 25,
    height: 25,
    ...flexHelper({ flexDirection: "column" }),
  },
  burgerItem: {
    width: 17,
    height: 2,
    backgroundColor: COLOR_TEXT_WHITE,
  },
  marginBottom: {
    marginBottom: 3,
  },
});
