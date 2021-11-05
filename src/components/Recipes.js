import React from "react";
import { View, FlatList, Button } from "react-native";
import Recipe from "./Recipe";

const Recipes = ({ recipes }) => {
  // TODO: Delete line 7 log
  console.log(recipes);

  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Recipe recipe={item}></Recipe>
          </View>
        )}
      />
    </View>
  );
};

export default Recipes;
