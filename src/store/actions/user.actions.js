export const SIGN_IN = "SIGN_IN";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const addFavourite = (recipeId) => ({
  type: ADD_FAVOURITE,
  recipeId,
});

export const removeFavourite = (recipeId) => ({
  type: REMOVE_FAVOURITE,
  recipeId,
});
