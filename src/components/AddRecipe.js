import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { addRecipe } from "../store/actions/recipes.actions";
import { BigButton, CommonTextInput } from "./commons";
import ImageSelector from "./ImageSelector";
import { CommonStyles, Tags } from "../constants";

export const AddRecipe = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [preparationTimeInput, setPreparationTimeInput] = useState("");
  const [preparationInput, setPreparationInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [unselectedTags, setUnselectedTags] = useState(Tags);
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
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
  const handlePreparationChange = (text) => {
    setPreparationInput(text);
  };
  const handleAddTag = (name) => {
    if (selectedTags.length > 2) {
      console.log(`Error, tags limit reached!`);
      return;
    }
    const updatedSelectedTags = selectedTags;
    updatedSelectedTags.push(name);
    setSelectedTags(updatedSelectedTags);
    const updatedUnselectedTags = unselectedTags.filter(
      (item) => item.name !== name
    );
    setUnselectedTags(updatedUnselectedTags);
    console.log(`Add tag ${name}`);
  };
  const handleRemoveTags = () => {
    setSelectedTags([]);
    setUnselectedTags(Tags);
  };
  const handleIngredientsChange = (text) => {
    setIngredientInput(text);
  };
  const handleAddIngredient = () => {
    if (ingredientInput) {
      const actualList = ingredients;
      actualList.push(ingredientInput);
      setIngredients(actualList);
      setIngredientInput("");
      console.log(ingredients);
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
      preparationInput &&
      ingredients
    ) {
      const newRecipe = {
        id: uuidv4(),
        user: user.userId,
        title: titleInput,
        description: descriptionInput,
        preparationTimeInMins: preparationTimeInput,
        tags: selectedTags,
        ingredients: ingredients,
        preparation: preparationInput,
        url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        valoration: 0,
      };
      console.log(`${titleInput} added!`);
      dispatch(addRecipe(newRecipe));
      console.log(newRecipe);
    }
  };

  return (
    <ScrollView
      style={{
        height: "100%",
      }}
    >
      <ImageSelector onImage={handlePickImage} />

      <View style={styles.tagsFeatureContainer}>
        <View style={styles.tagsContainer}>
          <FlatList
            ListEmptyComponent={
              <Text style={styles.tagsFeatureTitle}>Select until 3 tags!</Text>
            }
            horizontal={true}
            contentContainerStyle={{ flex: 1, justifyContent: "center" }}
            data={selectedTags}
            keyExtractor={(tag) => tag}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item}
                onPress={handleRemoveTags}
                style={{
                  ...styles.tagsTouchable,
                  borderColor: "gray",
                }}
              >
                <Text style={{ ...styles.tagsText, color: "gray" }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.tagsContainer}>
          <FlatList
            horizontal={true}
            data={unselectedTags}
            keyExtractor={(tag) => tag.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleAddTag(item.name)}
                style={{ ...styles.tagsTouchable, borderColor: item.color }}
              >
                <Text style={{ ...styles.tagsText, color: item.color }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <CommonTextInput placeholder="Title" onChangeText={handleTitleChange} />
      <CommonTextInput
        placeholder="Description"
        onChangeText={handleDescriptionChange}
      />
      <CommonTextInput
        placeholder="Time (Minutes)"
        keyboardType="number-pad"
        onChangeText={handlePreparationTimeChange}
      />
      <CommonTextInput
        placeholder="Preparation"
        multiline={true}
        onChangeText={handlePreparationChange}
      />

      <View
        style={{
          ...CommonStyles.textInputStyle,
          ...{
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
          },
        }}
      >
        <TextInput
          style={{ flex: 3, fontSize: 18 }}
          placeholder="Ingredients"
          value={ingredientInput}
          onChangeText={handleIngredientsChange}
        ></TextInput>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#e2e2e2",
            padding: 5,
            height: 30,
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={handleAddIngredient}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ingredientsFeatureContainer}>
        <FlatList
          ListEmptyComponent={
            <Text style={styles.ingredientsFeatureTitle}>
              No ingredients added
            </Text>
          }
          horizontal={true}
          data={ingredients}
          keyExtractor={(ingredient) => ingredient}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item}
              style={{
                ...styles.ingredientsTouchable,
                borderColor: "gray",
              }}
            >
              <Text style={{ ...styles.ingredientsText, color: "gray" }}>
                - {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <BigButton text="Send" onPress={handleAddRecipe} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ingredientsFeatureContainer: {
    width: "80%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  ingredientsFeatureTitle: {
    color: "gray",
    fontSize: 18,
  },
  ingredientsContainer: {
    flexDirection: "row",
    marginVertical: 5,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  ingredientsTouchable: {
    alignItems: "center",
    marginRight: 5,
    padding: 5,
  },
  ingredientsText: {
    fontSize: 18,
  },
  tagsFeatureContainer: {
    width: "80%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  tagsFeatureTitle: {
    fontSize: 18,
    color: "gray",
  },
  tagsContainer: {
    flexDirection: "row",
    marginVertical: 5,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  tagsTouchable: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    marginRight: 5,
    padding: 5,
  },
  tagsText: {
    fontSize: 18,
  },
});
