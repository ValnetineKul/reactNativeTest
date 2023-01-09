import { StyleSheet } from "react-native";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "center",
    alignSelf: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  fullWidthProductCard: {
    ...flexHelper({ justifyContent: "flex-start" }),
  },
  coverImage: {
    resizeMode: "cover",
  },
  fullWidthImageContainer: {
    marginRight: 10,
  },
  fullWidthDescriptionContainer: {
    ...flexHelper({ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }),
    height: "100%",
    paddingVertical: 6,
  },
});
