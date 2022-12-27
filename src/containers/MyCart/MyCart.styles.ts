import { StyleSheet } from "react-native";
import { FontWeights } from "../../components";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  myCartContainer: {
    ...flexHelper({ flexDirection: "column" }),
    padding: 20,
    paddingBottom: 55,
  },
  bigTitle: {
    fontWeight: FontWeights.fontWeightBold,
    marginBottom: 40,
    width: 244,
    textAlign: "center",
  },
  title: {
    fontWeight: FontWeights.fontWeightBold,
    marginTop: 16,
    width: 330,
    textAlign: "center",
  },
  subTitle: {
    width: 250,
    marginTop: 4,
    textAlign: "center",
  },
  actionButton: {
    marginTop: 32,
  },
  secondaryAction: {
    marginTop: 24,
  },
});
