import { Dimensions, StyleSheet } from "react-native";
import { COLOR_LIGHT_GRAY, FontWeights } from "../../components";

const imageWidth = Dimensions.get("window").width / 1.5;

export const styles = StyleSheet.create({
  productDetailsContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
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
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  divider: {
    marginTop: 25,
    marginBottom: 15,
  },
  subtitle: {
    fontWeight: FontWeights.fontWeightBold,
    marginBottom: 10,
  },
  colorPickerButton: {
    backgroundColor: COLOR_LIGHT_GRAY,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  productName: {
    marginBottom: 12,
  },
});
