import { StyleSheet } from "react-native";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  myCartContainer: {
    ...flexHelper({ flexDirection: "column" }),
    padding: 20,
    paddingBottom: 55,
  },
});
