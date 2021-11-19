import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const searchIconSrc = require("../icons/search_white.png");

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image style={styles.searchIcon} source={searchIconSrc}></Image>
      <TextInput
        style={styles.searchInput}
        maxLength={25}
        placeholder="Search"
        placeholderTextColor="#FFF"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    width: "96%",
    alignItems: "center",
    marginLeft: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    marginLeft: 30,
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#FFF",
    alignContent: "center",
  },
});

export default SearchBar;
