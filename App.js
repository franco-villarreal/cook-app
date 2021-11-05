import React from "react";
import { StyleSheet, View } from "react-native";
import Recipes from "./src/components/Recipes";
import recipes from "./recipes";
import SearchBar from "./src/components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Recipes recipes={recipes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    paddingTop: "15%",
    paddingBottom: "35%",
  },
  searchContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#E2E2E2",
    marginBottom: 20,
    padding: 10,
    flexDirection: "row",
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  searchInput: {
    marginLeft: 10,
    fontFamily: "Roboto",
    fontSize: 18,
    maxWidth: "100%",
  },
});
