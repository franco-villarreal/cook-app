import React from "react";
import { View, FlatList, Button } from "react-native";
import RecipeCard from "./RecipeCard";

const Recipes = ({ recipes, setSelectedRecipe }) => {
  // TODO: Delete line 7 log
  console.log(recipes);

  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingBottom: "45%" }}
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => (
          <View key={item.id}>
            <RecipeCard
              recipe={item}
              setSelectedRecipe={setSelectedRecipe}
            ></RecipeCard>
          </View>
        )}
      />
    </View>
  );
};

export default Recipes;
