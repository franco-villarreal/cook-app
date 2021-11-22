import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Device, CommonStyles } from "../constants";
import ImageWithGradient from "./ImageWithGradient";

const RecipeDetail = ({ recipe }) => {
  const ingredients = [];
  for (let i = 0; i < recipe.ingredients.length; i++) {
    ingredients.push(
      <Text key={i} style={CommonStyles.textStyle}>
        - {recipe.ingredients[i]}
      </Text>
    );
  }
  return (
    <View>
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        ></View>
        <ImageWithGradient
          recipe={recipe}
          imageStyles={styles.image}
          containerStyle={{ marginBottom: 25 }}
        />
        <View style={styles.recipeDataContainer}>
          <View style={styles.titleContainer}>
            <Text style={CommonStyles.titleStyles}>{recipe.title}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={CommonStyles.textStyle}>{recipe.description}</Text>
          </View>

          <View>
            <Text style={CommonStyles.subTitleStyles}>Ingredients</Text>
            {ingredients}
          </View>
          <View>
            <Text style={CommonStyles.subTitleStyles}>Preparation</Text>
            <Text style={CommonStyles.textStyle}>{recipe.preparation}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    height: Device.windowHeight / 1.5,
    width: "100%",
  },
  recipeDataContainer: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  titleContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
  },
  descriptionContainer: {
    marginTop: 5,
  },
});
export default RecipeDetail;
