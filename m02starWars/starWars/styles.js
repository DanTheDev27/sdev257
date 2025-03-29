import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Main container view
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 45,
  },
  Text: {
    fontSize: 40,
    marginTop: -50,
  },
  // Buttons container
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    height: "auto",
    width: "100%",
    maxWidth: 400,
  },
  // Title and buttons container
  topContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
});