import { StyleSheet } from "react-native";
import { flexHelper } from "../../../../utils";

export const styles = StyleSheet.create({
  priceContainer: {
    ...flexHelper({ justifyContent: "flex-start" }),
    flexGrow: 0,
  },
  marginProvider: {
    marginRight: 10,
  },
});
