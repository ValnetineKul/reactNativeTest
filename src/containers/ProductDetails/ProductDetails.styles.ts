import { Dimensions, StyleSheet } from "react-native";

const imageWidth = Dimensions.get("window").width / 1.5;

export const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageWidth,
    alignSelf: "center",
  },
  carousel: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  addToCartButton: {
    width: Dimensions.get("window").width - 32,
    position: "absolute",
    bottom: 16,
    left: 16,
  },
});
