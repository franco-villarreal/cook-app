import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants";

const searchIconSrc = require("../icons/search_black.png");

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image style={styles.searchIcon} source={searchIconSrc}></Image>
      <TextInput
        style={styles.searchInput}
        maxLength={30}
        placeholder="Search"
        placeholderTextColor={Colors.secondaryText}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    marginLeft: 30,
    fontFamily: "Roboto",
    fontSize: 18,
    color: Colors.primaryText,
    alignContent: "center",
  },
});

export default SearchBar;
