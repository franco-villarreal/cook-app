import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Recipes from "../components/Recipes";

export const FavouritesScreen = ({ navigation }) => {
  const favouritesRecipes = useSelector((state) =>
    state.recipes.recipes.filter((recipe) =>
      state.user.favourites.includes(recipe.id)
    )
  );

  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <Recipes recipes={favouritesRecipes} navigation={navigation} />
    </View>
  );
};

export default FavouritesScreen;
