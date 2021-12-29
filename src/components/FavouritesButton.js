import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ToastAndroid,
  AlertIOS,
  Alert,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateFavourites } from "../store/actions/user.actions";

const FavouriteButton = ({ size = "26", black = true }) => {
  const user = useSelector((state) => state.user);
  const recipe = useSelector((state) => state.recipes.selectedRecipe);
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
    const favourites = [...user.favourites];
    if (!favourite) {
      const payload = {
        userId: user.userId,
        favourites: [...favourites, recipe.id],
      };
      dispatch(updateFavourites(payload));
      setFavouriteIconType(isFavouriteIconSrc);
      notify(true);
    } else {
      const payload = {
        userId: user.userId,
        favourites: [...favourites.filter((id) => id !== recipe.id)],
      };
      dispatch(updateFavourites(payload));
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
      Alert.alert(msg);
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
