import { StyleSheet } from "react-native";
import { flexHelper } from "../../utils";

export const styles = StyleSheet.create({
  myProfileContainer: {
    ...flexHelper({ flexDirection: "column", justifyContent: "flex-start" }),
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  profileImage: {
    marginTop: 32,
    marginBottom: 48,
  },
  inputMargin: {
    marginBottom: 20,
  },
  updateButton: {
    marginTop: 52,
  },
});
