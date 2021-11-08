import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const Recipe = ({ recipe }) => {
  const starIconSrc = require("../icons/star.png");
  const clockIconSrc = require("../icons/clock_black.png");
  const isFavouriteIconSrc = require("../icons/filled_heart_black.png");
  const isNotFavouriteIconSrc = require("../icons/heart_black.png");
  const stars = [];
  let isFavourite = false;

  for (let i = 0; i < recipe.valoration; i++) {
    stars.push(
      <Image key={i} style={styles.starIcon} source={starIconSrc}></Image>
    );
  }
  const handleFavourites = () => {
    isFavourite = !isFavourite;
    console.log(`${recipe.id} isFavourite? : ${isFavourite}`);
    Alert.alert(
      null,
      isFavourite
        ? `${recipe.title} added to favourites!`
        : `${recipe.title} removed from favourites!`
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: recipe.url }} />
      <View style={styles.recipeDataContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{recipe.title}</Text>
          <TouchableOpacity
            style={styles.favouriteToucheable}
            onPress={handleFavourites}
          >
            <Image
              style={styles.favouriteIcon}
              source={isFavourite ? isFavouriteIconSrc : isNotFavouriteIconSrc}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.valorationStarsContainer}>{stars}</View>
        <View style={styles.preparationTimeContainer}>
          <Image style={styles.clockIcon} source={clockIconSrc}></Image>
          <Text style={styles.preparationTimeInMins}>
            {recipe.preparationTimeInMins} min
          </Text>
        </View>

        <Text style={styles.description}>{recipe.description}</Text>
        <Text style={styles.user}>by {recipe.user}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
    flexDirection: "row",
  },
  image: {
    width: "50%",
    height: "100%",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  recipeDataContainer: {
    padding: 5,
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 24,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  title: {
    color: "#000000",
    fontSize: 20,
  },
  favouriteToucheable: {},
  favouriteIcon: {
    marginLeft: 5,
    width: 25,
    height: 25,
  },
  valorationStarsContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  preparationTimeContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  preparationTimeInMins: {
    marginLeft: 5,
  },
  clockIcon: {
    width: 18,
    height: 18,
  },
  valoration: {},
  description: {
    marginTop: 10,
    color: "#000000",
  },
  user: {
    marginTop: 5,
    color: "#a2a2a2",
    marginBottom: 5,
  },
});

export default Recipe;
