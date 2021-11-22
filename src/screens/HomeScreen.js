import React from "react";
import { View } from "react-native";
import Recipes from "../components/Recipes";
import recipes from "../../recipes";

const HomeScreen = ({ navigation }) => {
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
