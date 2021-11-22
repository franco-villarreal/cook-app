import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SearchBar from "../components/SearchBar";
import FavouriteButton from "../components/FavouritesButton";
import User from "../../user";
import { Colors } from "../constants";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.light,
          },
          headerTintColor: Colors.title,
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignIn"
          component={SignInScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUpScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerLeft: () => <SearchBar />, title: "" }}
          name="Home"
          component={HomeScreen}
        ></Stack.Screen>
        <Stack.Screen
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
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
