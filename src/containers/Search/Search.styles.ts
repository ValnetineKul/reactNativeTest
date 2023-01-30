import { StyleSheet } from "react-native";
import { COLOR_CARD_BOX_SHADOW, COLOR_TEXT_WHITE } from "../../theme";

export const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  productsContainer: {
    marginTop: 20,
  },
  productCard: {
    marginBottom: 20,
  },
  pastSearchesContainer: {
    position: "absolute",
    paddingHorizontal: 20,
    backgroundColor: COLOR_TEXT_WHITE,
    width: "100%",
    zIndex: 100,
    top: 80,
    left: 20,
    borderRadius: 4,
    shadowColor: COLOR_CARD_BOX_SHADOW,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  pastSearchItem: {
    position: "relative",
    marginVertical: 4,
  },

  deleteButton: {
    position: "absolute",
    right: 8,
  },
});
