import { StyleSheet } from "react-native";
import { FontWeights } from "../../../../components";

export const styles = StyleSheet.create({
  title: {
    marginBottom: 72,
  },
  subtitle: {
    fontWeight: FontWeights.fontWeightBold,
    marginBottom: 12,
    marginLeft: 20,
  },
  drawerElement: {
    flexDirection: "row",
    alignItems: "center",
  },
  drawerName: {
    marginLeft: 24,
  },
  dividerMargin: {
    marginBottom: 12,
  },
});
