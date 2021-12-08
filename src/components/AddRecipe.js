import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { addRecipe } from "../store/actions/recipes.actions";
import { BigButton, CommonTextInput } from "./commons";
import ImageSelector from "./ImageSelector";

const tags = [];
const ingredients = [];

export const AddRecipe = () => {
  const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [preparationTimeInput, setPreparationTimeInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (text) => {
    setTitleInput(text);
  };
  const handleDescriptionChange = (text) => {
    setDescriptionInput(text);
  };
  const handlePreparationTimeChange = (text) => {
    setPreparationTimeInput(text);
  };
  const handleTagsChange = (text) => {
    setTagInput(text);
  };
  const handleAddTag = () => {
    if (tagInput) {
      tags.push(tagInput);
      setTagInput("");
    }
  };
  const handleIngredientsChange = (text) => {
    setIngredientInput(text);
  };
  const handleAddIngredient = () => {
    if (ingredientInput) {
      ingredients.push(ingredientInput);
      setIngredientInput("");
    }
  };
  const handlePickImage = (image) => {
    setImage(image);
  };
  const handleAddRecipe = () => {
    if (
      titleInput &&
      descriptionInput &&
      preparationTimeInput &&
      tags &&
      ingredients
    ) {
      const newRecipe = {
        id: uuidv4(),
        user: "",
        title: titleInput,
        description: descriptionInput,
        preparationTimeInMins: preparationTimeInput,
        tags: tags,
        ingredients: ingredients,
        preparation: "",
        url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        valoration: 0,
      };
      console.log(`${titleInput} added!`);
      dispatch(addRecipe(newRecipe));
      console.log(newRecipe);
    }
  };

  return (
    <View>
      <CommonTextInput placeholder="Title" onChangeText={handleTitleChange} />
      <CommonTextInput
        placeholder="Description"
        onChangeText={handleDescriptionChange}
      />
      <CommonTextInput
        placeholder="Time"
        onChangeText={handlePreparationTimeChange}
      />
      <View style={{ flexDirection: "row" }}>
        <CommonTextInput
          placeholder="Tags"
          value={tagInput}
          onChangeText={handleTagsChange}
        />
        <TouchableOpacity
          style={{ width: "10%", backgroundColor: "red", padding: 10 }}
          onPress={handleAddTag}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <CommonTextInput
          placeholder="Ingredients"
          onChangeText={handleIngredientsChange}
        />
        <TouchableOpacity onPress={handleAddIngredient}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      <ImageSelector onImage={handlePickImage} />

      <BigButton text="Send" onPress={handleAddRecipe} />
    </View>
  );
};
