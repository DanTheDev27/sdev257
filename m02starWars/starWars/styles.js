import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Main container view
  container: {
    flex: 1,
    backgroundColor: '#242830',
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 45,
  },
  Text: {
    fontSize: 40,
    marginTop: -50,
    color: '#FFE81F',
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
    marginBottom: 30,
  },
  filmsItem: {
    paddingBottom: 20,
  },
  planetItem: {
    paddingBottom: 20,
  },
  spaceshipItem: {
    paddingBottom: 20,
  },
  // search input
  searchContainer: {
    marginTop: 20,
    marginBottom: 75,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00ADB5",
    color: '#EDEDED',
    padding: 10,
    borderRadius: 20,
    marginBottom: 8,

  },
  // search modal
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modal: {
    backgroundColor: "#333",
    padding: 25,
    borderRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#EDEDED',
  },
  renderedText: {
    color: '#EDEDED',
    fontSize: 15,
  },
});