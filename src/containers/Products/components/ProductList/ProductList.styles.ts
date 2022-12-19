import { Dimensions, StyleSheet } from "react-native";

export const cardGap = 16;

const cardWidth = (Dimensions.get("window").width - cardGap * 3) / 2;

export const styles = StyleSheet.create({
  productsListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  productCard: {
    marginBottom: cardGap,
    width: cardWidth,
  },
});
