import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  AlertIOS,
  Platform,
} from "react-native";
import Colors from "../constants/colors";

const isFavouriteIconSrc = require("../icons/filled_heart_black.png");
const isNotFavouriteIconSrc = require("../icons/heart_black.png");
const starIconSrc = require("../icons/star.png");
const clockIconSrc = require("../icons/clock_black.png");

const Recipe = ({ recipe }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteIconType, setFavouriteIconType] = useState(
    isNotFavouriteIconSrc
  );

  const stars = [];

  for (let i = 0; i < recipe.valoration; i++) {
    stars.push(
      <Image key={i} style={styles.starIcon} source={starIconSrc}></Image>
    );
  }

  const handleFavourites = () => {
    setIsFavourite(isFavourite ? false : true);
    setFavouriteIconType(
      isFavourite ? isFavouriteIconSrc : isNotFavouriteIconSrc
    );
    console.log(`${recipe.id} isFavourite? : ${isFavourite}`);
    notify();
  };

  const notify = () => {
    const msg = isFavourite
      ? `${recipe.title} added to favourites!`
      : `${recipe.title} removed from favourites!`;
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
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
              source={favouriteIconType}
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
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{recipe.description}</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>by {recipe.user}</Text>
        </View>
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
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    color: "#000000",
    fontSize: 20,
    flex: 5,
  },
  favouriteToucheable: {
    flex: 1,
  },
  favouriteIcon: {
    width: 25,
    height: 25,
  },
  valorationStarsContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  preparationTimeContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
  },
  preparationTimeInMins: {
    marginLeft: 5,
  },
  clockIcon: {
    width: 18,
    height: 18,
  },
  valoration: {},
  descriptionContainer: {
    flex: 3,
  },
  description: {
    marginTop: 10,
    color: "#000000",
  },
  userContainer: {
    alignItems: "flex-end",
    flex: 1,
  },
  user: {
    marginVertical: 5,
    color: Colors.secondaryText,
  },
});

export default Recipe;
