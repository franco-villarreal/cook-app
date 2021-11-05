import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image
        style={styles.searchIcon}
        source={require("../icons/search_black.png")}
      ></Image>
      <TextInput
        style={styles.searchInput}
        maxLength={25}
        placeholder="Search"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
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

export default SearchBar;
