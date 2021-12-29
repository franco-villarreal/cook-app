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
import { BigButton, CommonIcon, CommonTextInput } from "./commons";
import ImageSelector from "./ImageSelector";
import {
  Device,
  CommonStyles,
  Parameters,
  Tags,
  CLOUDINARY_API_KEY,
  CLOUDINARY_URL,
} from "../constants";
import Error from "../constants/ErrorMessage";

const titleErrorText = `Title is required. Type at least ${Parameters.TITLE_MIN_LENGTH} characters.`;
const descriptionErrorText = `Description is required. Type at least ${Parameters.DESCRIPTION_MIN_LENGTH} characters.`;

export const AddRecipe = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [preparationTimeInput, setPreparationTimeInput] = useState("");
  const [preparationInput, setPreparationInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [unselectedTags, setUnselectedTags] = useState(Tags);
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredientQuantityInput, setIngredientQuantityInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [image, setImage] = useState({});

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
      console.log(`There was an error: ${Error.TAGS_LIMIT_REACHED}`);
      return;
    }
    const updatedSelectedTags = selectedTags;
    updatedSelectedTags.push(name);
    setSelectedTags(updatedSelectedTags);
    const updatedUnselectedTags = unselectedTags.filter(
      (item) => item.name !== name
    );
    setUnselectedTags(updatedUnselectedTags);
    console.log(`Added tag: ${name}`);
  };
  const handleRemoveTags = () => {
    setSelectedTags([]);
    setUnselectedTags(Tags);
  };
  const handleIngredientsChange = (text) => {
    setIngredientInput(text);
  };
  const handleIngredientQuantityChange = (text) => {
    setIngredientQuantityInput(text);
  };
  const handleAddIngredient = () => {
    if (ingredientInput && ingredientQuantityInput) {
      const actualList = ingredients;
      actualList.push(`${ingredientInput} ${ingredientQuantityInput}`);
      setIngredients(actualList);
      setIngredientInput("");
      setIngredientQuantityInput("");
    }
  };
  const handlePickImage = (image) => {
    const base64Image = `data:image/jpg;base64,${image.base64}`;
    setImage({ localUri: image.uri, base64: base64Image });
  };
  const handleAddRecipe = async () => {
    if (
      titleInput.isValid &&
      descriptionInput &&
      preparationTimeInput &&
      preparationInput &&
      ingredients
    ) {
      const url = await uploadImage();
      const newRecipe = {
        id: uuidv4(),
        user: user.userId,
        title: titleInput.value,
        description: descriptionInput,
        preparationTimeInMins: preparationTimeInput,
        tags: selectedTags,
        ingredients: ingredients,
        preparation: preparationInput,
        url,
        valoration: 0,
      };
      dispatch(addRecipe(newRecipe));
      console.log(`New recipe added: ${newRecipe}`);
      navigation.navigate("Home");
    }
  };
  const uploadImage = async () => {
    let payload = {
      file: image.base64,
      upload_preset: "ml_default",
      api_key: parseInt(CLOUDINARY_API_KEY),
    };
    try {
      const response = await fetch(CLOUDINARY_URL, {
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      });

      let data = await response.json();

      return data.url;
    } catch (error) {
      console.log(error);
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

      <CommonTextInput
        placeholder="Title"
        customTextStyles={{ width: "100%" }}
        onInputChange={handleTitleChange}
        required={true}
        minLength={Parameters.TITLE_MIN_LENGTH}
        errorText={titleErrorText}
      />
      <CommonTextInput
        placeholder="Description"
        multiline={true}
        customTextStyles={{ width: "100%", height: Device.screenHeight / 5 }}
        onInputChange={handleDescriptionChange}
        required={true}
        minLength={Parameters.DESCRIPTION_MIN_LENGTH}
        errorText={descriptionErrorText}
      />
      <CommonTextInput
        placeholder="Time (Minutes)"
        keyboardType="number-pad"
        customTextStyles={{ width: "100%" }}
        onInputChange={handlePreparationTimeChange}
        required={true}
        min={1}
        max={181}
        errorText={`Preparation time should be especified.`}
      />
      <CommonTextInput
        placeholder="Preparation"
        multiline={true}
        customTextStyles={{ width: "100%", height: Device.screenHeight / 5 }}
        onInputChange={handlePreparationChange}
        required={true}
        minLength={12}
        errorText={`Preparation instructions are required.`}
      />

      <View
        style={{
          ...CommonStyles.textInputStyle,
          ...{
            width: "100%",
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
          },
        }}
      >
        <TextInput
          style={{
            flex: 3,
            fontSize: 18,
            borderRightColor: "gray",
            borderRightWidth: 1,
          }}
          placeholder="Ingredient"
          value={ingredientInput}
          onChangeText={handleIngredientsChange}
        ></TextInput>
        <TextInput
          style={{
            flex: 2,
            fontSize: 18,
            marginLeft: 30,
          }}
          placeholder="Quantity"
          value={ingredientQuantityInput}
          onChangeText={handleIngredientQuantityChange}
        ></TextInput>
        <TouchableOpacity onPress={handleAddIngredient}>
          <CommonIcon
            focused={false}
            options={{ icon: "add-circle", size: 40 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ingredientsFeatureContainer}>
        <FlatList
          ListEmptyComponent={
            <Text style={styles.ingredientsFeatureTitle}>
              No ingredients added
            </Text>
          }
          horizontal={false}
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
                {">"} {item}
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
    width: "100%",
    marginVertical: 20,
  },
  ingredientsFeatureTitle: {
    color: "gray",
    fontSize: 18,
  },
  ingredientsContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  ingredientsTouchable: {
    marginRight: 5,
    padding: 5,
  },
  ingredientsText: {
    fontSize: 18,
  },
  tagsFeatureContainer: {
    width: "100%",
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
    marginVertical: 10,
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
