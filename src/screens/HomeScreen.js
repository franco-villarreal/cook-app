import React from "react";
import { View } from "react-native";
import Recipes from "../components/Recipes";
import { useSelector } from "react-redux";

export const HomeScreen = ({ navigation }) => {
  const recipes = useSelector((state) => state.recipes.filteredRecipes);
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <Recipes recipes={recipes} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
