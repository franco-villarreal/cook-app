import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ToastAndroid,
  AlertIOS,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../store/actions/user.actions";

const FavouriteButton = ({ size = "26", black = true }) => {
  const recipe = useSelector((state) => state.recipes.selectedRecipe);
  console.log(useSelector((state) => state.user));
  const favourite = useSelector((state) =>
    state.user.favourites.includes(recipe.id)
  );
  const dispatch = useDispatch();
  const isFavouriteIconSrc = black
    ? require("../icons/filled_heart_black.png")
    : require("../icons/filled_heart_white.png");
  const isNotFavouriteIconSrc = black
    ? require("../icons/heart_black.png")
    : require("../icons/heart_white.png");
  const [favouriteIconType, setFavouriteIconType] = useState(
    favourite ? isFavouriteIconSrc : isNotFavouriteIconSrc
  );

  const handleFavourites = () => {
    if (!favourite) {
      dispatch(addFavourite(recipe.id));
      setFavouriteIconType(isFavouriteIconSrc);
      notify(true);
    } else {
      dispatch(removeFavourite(recipe.id));
      setFavouriteIconType(isNotFavouriteIconSrc);
      notify(false);
    }
  };

  const notify = (flag) => {
    const msg = flag
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
