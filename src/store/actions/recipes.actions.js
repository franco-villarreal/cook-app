import { FIRESTORE_URL } from "../../constants/Firebase";
export const SELECT_RECIPE = "SELECT_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

export const selectRecipe = (recipe) => ({
  type: SELECT_RECIPE,
  recipe,
});

export const addRecipe = (recipe) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_URL}/recipes.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });

      const result = await response.json();
      console.log(result);

      dispatch({
        type: ADD_RECIPE,
        recipe,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeRecipe = (recipe) => ({
  type: REMOVE_RECIPE,
  recipe,
});
