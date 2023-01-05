import { StyleSheet } from "react-native";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    ...flexHelper({}),
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 40,
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  indicatorOuterContainer: {
    maxWidth: 58,
    overflow: "hidden",
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  imageContainer: {
    flex: 1,
  },
  arrowLeft: {
    zIndex: 999,
    position: "absolute",
    left: 20,
    top: "40%",
  },
  arrowRight: {
    zIndex: 999,
    position: "absolute",
    right: 20,
    top: "40%",
  },
});
