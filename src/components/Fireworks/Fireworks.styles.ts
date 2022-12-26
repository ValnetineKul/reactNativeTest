import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -100,
    left: -100,
    zIndex: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  explosionBoundary: {
    position: "absolute",
    height: 200,
    width: 200,
    zIndex: 0,
  },
  ball: {
    position: "absolute",
  },
});
