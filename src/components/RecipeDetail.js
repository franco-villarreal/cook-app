import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ValorationStars from "./ValorationStars";
import PreparationTime from "./PreparationTime";
import UnselectRecipe from "./UnselectRecipe";
import FavouriteButton from "./FavouritesButton";

const RecipeDetail = ({ recipe, setSelectRecipe }) => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <UnselectRecipe setSelectedRecipe={setSelectRecipe} />
          <FavouriteButton recipe={recipe} size="40" black={false} />
        </View>
        <Image style={styles.image} source={{ uri: recipe.url }}></Image>
        <View style={styles.recipeDataContainer}>
          <PreparationTime
            preparationTimeInMins={recipe.preparationTimeInMins}
            size="25"
            direction="row-reverse"
          />
          <ValorationStars
            valoration={recipe.valoration}
            size="25"
            direction="row-reverse"
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{recipe.title}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{recipe.description}</Text>
          </View>
          <View>
            <Text>Ingredients</Text>
            <Text>{recipe.ingredients}</Text>
          </View>
          <View>
            <Text>Preparation</Text>
            <Text>{recipe.preparation}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
  },
  image: {
    marginTop: -50,
    height: 600,
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  recipeDataContainer: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  titleContainer: {
    marginTop: 5,
  },
  descriptionContainer: {
    marginTop: 5,
  },
});
export default RecipeDetail;
