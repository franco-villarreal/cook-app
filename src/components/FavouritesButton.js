import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ToastAndroid,
  AlertIOS,
  Platform,
} from "react-native";

const FavouriteButton = ({
  recipe,
  size = "28",
  black = true,
  favourite = false,
}) => {
  const isFavouriteIconSrc = black
    ? require("../icons/filled_heart_black.png")
    : require("../icons/filled_heart_white.png");
  const isNotFavouriteIconSrc = black
    ? require("../icons/heart_black.png")
    : require("../icons/heart_white.png");
  const [isFavourite, setIsFavourite] = useState(favourite);
  const [favouriteIconType, setFavouriteIconType] = useState(
    isFavourite ? isFavouriteIconSrc : isNotFavouriteIconSrc
  );

  const handleFavourites = () => {
    console.log(`isFavourite is: ${isFavourite}`);
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
    <TouchableOpacity
      style={styles.favouriteToucheable}
      onPress={handleFavourites}
    >
      <Image
        style={{ width: Number(size), height: Number(size) }}
        source={favouriteIconType}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favouriteToucheable: {},
});

export default FavouriteButton;
