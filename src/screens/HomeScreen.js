import React, { useEffect } from "react";
import { View } from "react-native";
import Recipes from "../components/Recipes";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../store/actions/recipes.actions";
import { PlusButton } from "../components/commons";

export const HomeScreen = ({ navigation }) => {
  const recipes = useSelector((state) => state.recipes.filteredRecipes);
  if (recipes.length === 0) {
    const dispatch = useDispatch();
    dispatch(getRecipes());
  }
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
