import React from "react";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import Recipes from "../components/Recipes";
import recipes from "../../recipes";

const HomeScreen = ({ setSelectedRecipe }) => {
  return (
    <View
      style={{
        padding: 10,
        paddingTop: "15%",
      }}
    >
      <SearchBar />
      <Recipes recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
    </View>
  );
};

export default HomeScreen;
