import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: "grey",
    margin: 10,
  },
  list: {
    alignSelf: "stretch",
  },
  item: {
    backgroundColor: "#5567bf",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    color: "#ffff",
  },
  itemCompleted: {
    color: "#ffffff",
    textDecorationLine: "line-through",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 22,
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    backgroundColor: "#9898c1",
    padding: 15,
    borderRadius: 30,
    margin: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5,
    display: "flex",
    // alignContent
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
