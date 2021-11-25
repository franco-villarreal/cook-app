import React from "react";
import { View } from "react-native";
import RecipeDetail from "../components/RecipeDetail";

export const RecipeDetailScreen = ({ route }) => {
  return (
    <View>
      <RecipeDetail recipe={route.params.recipe} />
    </View>
  );
};

export default RecipeDetailScreen;
