import { StyleSheet } from "react-native";
import { FontWeights } from "../../../../components";

export const styles = StyleSheet.create({
  title: {
    marginBottom: 72,
  },
  mainContainer: {
    padding: 20,
  },
  subtitle: {
    fontWeight: FontWeights.fontWeightBold,
    marginBottom: 28,
  },
  drawerElement: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  drawerName: {
    marginLeft: 24,
  },
  dividerMargin: {
    marginBottom: 24,
  },
});
