import React from "react";
import { View } from "react-native";
import RecipeDetail from "../components/RecipeDetail";

const RecipeDetailScreen = ({ recipe, setSelectedRecipe }) => {
  return (
    <View
      style={{
        paddingTop: "15%",
      }}
    >
      <RecipeDetail recipe={recipe} setSelectRecipe={setSelectedRecipe} />
    </View>
  );
};

export default RecipeDetailScreen;
