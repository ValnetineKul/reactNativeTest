import { StyleSheet } from "react-native";
import { FontWeights } from "../../components";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  myCartContainer: {
    ...flexHelper({ flexDirection: "column" }),
    padding: 20,
    paddingBottom: 55,
  },
  title: {
    fontWeight: FontWeights.fontWeightBold,
    marginTop: 16,
  },
  subTitle: {
    marginTop: 4,
  },
  actionButton: {
    marginTop: 32,
  },
  secondaryAction: {
    marginTop: 24,
  },
});
