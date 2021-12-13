import React from "react";
import { View } from "react-native";
import Recipes from "../components/Recipes";
import { useSelector } from "react-redux";
import { PlusButton } from "../components/commons";

export const HomeScreen = ({ navigation }) => {
  const recipes = useSelector((state) => state.recipes.filteredRecipes);
  const handlePlusButton = () => {
    navigation.navigate("CreateRecipe");
  };
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <Recipes recipes={recipes} navigation={navigation} />
      <PlusButton onPress={handlePlusButton} />
    </View>
  );
};

export default HomeScreen;
