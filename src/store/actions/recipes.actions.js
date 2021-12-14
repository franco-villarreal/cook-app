import RecipesService from "../../services/RecipesService";
export const SELECT_RECIPE = "SELECT_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_RECIPES = "GET_RECIPES";

const recipesService = new RecipesService();

export const selectRecipe = (recipe) => ({
  type: SELECT_RECIPE,
  recipe,
});

export const addRecipe = (recipe) => {
  return async (dispatch) => {
    try {
      const recipes = await recipesService.saveRecipe(recipe);

      dispatch({
        type: ADD_RECIPE,
        recipes,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const recipes = await recipesService.getRecipes();

      dispatch({
        type: GET_RECIPES,
        recipes,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
