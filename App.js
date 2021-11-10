import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";
export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  if (!loaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      {selectedRecipe ? (
        <RecipeDetailScreen
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      ) : (
        <HomeScreen setSelectedRecipe={setSelectedRecipe} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
