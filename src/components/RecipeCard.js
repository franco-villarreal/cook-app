import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Device } from "../constants";
import Tag from "./Tag";
import ImageWithGradient from "./ImageWithGradient";

const RecipeCard = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <ImageWithGradient
        recipe={recipe}
        imageStyles={styles.image}
        containerStyle={styles.imageContainerStyle}
      />
      <View style={styles.recipeDataContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{recipe.title}</Text>
        </View>
        <Tag tags={recipe.tags} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Device.windowHeight / 1.8,
    minHeight: Device.windowHeight / 1.8,
    maxHeight: Device.windowHeight / 2,
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
    flexDirection: "column",
  },
  imageContainerStyle: {
    height: "75%",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recipeDataContainer: {
    alignItems: "center",
    padding: 5,
    paddingLeft: 10,
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 24,
  },
  titleContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  title: {
    color: Colors.title,
    fontSize: 28,
    fontFamily: "Roboto-Regular",
  },
});

export default RecipeCard;
