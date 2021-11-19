import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import PreparationTime from "./PreparationTime";
import ValorationStars from "./ValorationStars";
import Device from "../constants/device";

const RecipeCard = ({ recipe, favouritesFeature = true }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: recipe.url }} />
      <View style={styles.recipeDataContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{recipe.title}</Text>
        </View>
        <ValorationStars valoration={recipe.valoration} size="18" />
        <PreparationTime preparationTimeInMins={recipe.preparationTimeInMins} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{recipe.description}</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>by {recipe.user}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: Device.windowHeight / 4,
    maxHeight: 250,
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
    elevation: 5,
    flexDirection: "row",
  },
  image: {
    width: "40%",
    height: "100%",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  recipeDataContainer: {
    padding: 5,
    paddingLeft: 10,
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 24,
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    color: "#000000",
    fontSize: 20,
    flex: 5,
    fontFamily: "Roboto-Regular",
  },
  descriptionContainer: {
    flex: 3,
  },
  description: {
    marginTop: 10,
    color: "#000000",
  },
  userContainer: {
    alignItems: "flex-end",
    margin: 5,
  },
  user: {
    color: Colors.secondaryText,
  },
});

export default RecipeCard;
