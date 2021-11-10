import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/colors";
import PreparationTime from "./PreparationTime";
import ValorationStars from "./ValorationStars";
import FavouriteButton from "./FavouritesButton";

const RecipeCard = ({ recipe, setSelectedRecipe }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedRecipe(recipe);
      }}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: recipe.url }} />
        <View style={styles.recipeDataContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{recipe.title}</Text>
            <FavouriteButton recipe={recipe} />
          </View>
          <ValorationStars valoration={recipe.valoration} size="22" />
          <PreparationTime
            preparationTimeInMins={recipe.preparationTimeInMins}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{recipe.description}</Text>
          </View>
          <View style={styles.userContainer}>
            <Text style={styles.user}>by {recipe.user}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
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
    flex: 1,
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
    flex: 1,
  },
  user: {
    marginVertical: 5,
    color: Colors.secondaryText,
  },
});

export default RecipeCard;
