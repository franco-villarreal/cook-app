import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import Colors from "../constants/colors";
import SearchBar from "../components/SearchBar";
import FavouriteButton from "../components/FavouritesButton";
import User from "../../user";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#FFF",
        }}
      >
        <Stack.Screen
          options={{ headerLeft: () => <SearchBar /> }}
          name="Home"
          component={HomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.recipe.title,
            headerRight: () => (
              <FavouriteButton
                recipe={route.params.recipe}
                black={false}
                favourite={() => {
                  return User.favourites.includes(route.params.recipe.id);
                }}
              />
            ),
          })}
          name="RecipeDetail"
          component={RecipeDetailScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
