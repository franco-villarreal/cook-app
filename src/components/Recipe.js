import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Recipe = ({ recipe }) => {
  // TODO: Delete line 6 log
  console.log(recipe);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: recipe.url }} />
      <View style={styles.recipeDataContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.preparationTimeInMins}>
          {recipe.preparationTimeInMins}
        </Text>
        <Text style={styles.valoration}>{recipe.valoration}</Text>
        <Text style={styles.description}>{recipe.description}</Text>
        <Text style={styles.user}>by {recipe.user}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
    flexDirection: "row",
  },
  image: {
    width: "50%",
    height: "100%",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  recipeDataContainer: {
    padding: 5,
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 24,
  },
  title: {
    color: "#000000",
    fontSize: 20,
  },
  preparationTimeInMins: {},
  valoration: {},
  description: {
    color: "#000000",
  },
  user: {
    color: "#a2a2a2",
    marginBottom: 5,
  },
});

export default Recipe;
