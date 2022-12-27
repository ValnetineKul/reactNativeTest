import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  subtitle: {
    textAlign: "center",
    maxWidth: 190,
  },
  actionButton: {
    marginTop: 30,
  },
  flexDirectionRowProvider: {
    flexDirection: "row",
  },
  notLastButtonMargin: {
    marginRight: 20,
  },
  loginSignUpTitle: {
    marginBottom: 72,
    maxWidth: 180,
    textAlign: "center",
  },
  inputMargin: {
    marginTop: 24,
  },
  forgotPasswordButton: {
    marginTop: 16,
    alignSelf: "flex-start",
  },
  forgotPasswordText: {
    marginBottom: 52,
    textAlign: "center",
  },
  skipLoginIcon: {
    transform: [{ rotate: "180deg" }],
  },
  skipLoginButton: {
    marginTop: 90,
  },
});
