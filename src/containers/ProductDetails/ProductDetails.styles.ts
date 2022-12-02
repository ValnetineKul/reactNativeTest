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
});
