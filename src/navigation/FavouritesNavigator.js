import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FavouritesScreen, RecipeDetailScreen } from "../screens";
import FavouriteButton from "../components/FavouritesButton";
import SearchBar from "../components/SearchBar";
import { Colors } from "../constants";

const FavouritesStack = createNativeStackNavigator();

export const FavouritesNavigator = () => {
  return (
    <FavouritesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light,
        },
        headerTintColor: Colors.title,
      }}
    >
      <FavouritesStack.Screen
        options={{ headerLeft: () => <SearchBar />, title: "" }}
        name="Favourites"
        component={FavouritesScreen}
      ></FavouritesStack.Screen>
      <FavouritesStack.Screen
        options={() => ({
          title: "",
          headerRight: () => <FavouriteButton />,
        })}
        name="RecipeDetail"
        component={RecipeDetailScreen}
      ></FavouritesStack.Screen>
    </FavouritesStack.Navigator>
  );
};

export default FavouritesNavigator;
