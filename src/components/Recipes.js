import React from "react";
import { View, FlatList, Button } from "react-native";
import Recipe from "./Recipe";

const Recipes = ({ recipes }) => {
  // TODO: Delete line 7 log
  console.log(recipes);

  const toggleFavourites = (item) => {
    console.log(`id: ${item.id} added to favourites!`);
  };

  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Recipe recipe={item}></Recipe>
            <Button
              title="Add to favourites!"
              onPress={() => toggleFavourites(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Recipes;
