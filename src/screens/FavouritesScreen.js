import React from "react";
import { View } from "react-native";
import Recipes from "../components/Recipes";
import favouritesRecipes from "../data/favouritesRecipes";

export const FavouritesScreen = ({ navigation }) => {
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
