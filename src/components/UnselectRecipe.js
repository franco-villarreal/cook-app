import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

const crossIconSrc = require("../icons/close.png");

const UnselectRecipe = ({ setSelectedRecipe }) => {
  return (
    <TouchableOpacity
      style={styles.crossToucheable}
      onPress={() => {
        setSelectedRecipe(null);
      }}
    >
      <Image style={styles.crossIcon} source={crossIconSrc}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  crossToucheable: {
    padding: 10,
    flex: 1,
    zIndex: 1,
  },
  crossIcon: {
    width: 30,
    height: 30,
  },
});

export default UnselectRecipe;
