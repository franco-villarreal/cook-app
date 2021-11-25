import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, RecipeDetailScreen } from "../screens";
import SearchBar from "../components/SearchBar";
import FavouriteButton from "../components/FavouritesButton";
import { Colors } from "../constants";
import User from "../data/user";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light,
        },
        headerTintColor: Colors.title,
      }}
    >
      <HomeStack.Screen
        options={{ headerLeft: () => <SearchBar />, title: "" }}
        name="Home"
        component={HomeScreen}
      ></HomeStack.Screen>
      <HomeStack.Screen
        options={({ route }) => ({
          title: "",
          headerRight: () => (
            <FavouriteButton
              recipe={route.params.recipe}
              favourite={() => {
                return User.favourites.includes(route.params.recipe.id);
              }}
            />
          ),
        })}
        name="RecipeDetail"
        component={RecipeDetailScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
