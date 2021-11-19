import React from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import RecipeCard from "./RecipeCard";

const Recipes = ({ recipes, navigation }) => {
  const handleCardTouch = (item) => {
    navigation.navigate("RecipeDetail", { recipe: item });
  };
  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => handleCardTouch(item)}
          >
            <View>
              <RecipeCard recipe={item}></RecipeCard>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

export default Recipes;
