import { Dimensions, StyleSheet } from "react-native";

export const cardGap = 16;

const cardWidth = (Dimensions.get("window").width - cardGap * 3) / 2;

export const styles = StyleSheet.create({
  productCard: {
    marginTop: cardGap,
    marginLeft: cardGap,
    width: cardWidth,
  },
  bottomPadding: {
    paddingBottom: 150,
  },
});
