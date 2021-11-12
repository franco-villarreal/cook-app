import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  if (!loaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {selectedRecipe ? (
        <RecipeDetailScreen
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      ) : (
        <HomeScreen setSelectedRecipe={setSelectedRecipe} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
