import React from "react";
import { View } from "react-native";
import { AddRecipe } from "../components/AddRecipe";

export const CreateRecipeScreen = ({ navigation }) => {
  //TODO: add styles and missing inputs
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <AddRecipe />
    </View>
  );
};

export default CreateRecipeScreen;
