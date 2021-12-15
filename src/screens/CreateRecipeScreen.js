import React from "react";
import { View } from "react-native";
import { AddRecipe } from "../components/AddRecipe";

export const CreateRecipeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <AddRecipe navigation={navigation} />
    </View>
  );
};

export default CreateRecipeScreen;
