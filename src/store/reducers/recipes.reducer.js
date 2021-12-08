import recipes from "../../data/recipes";
import {
  ADD_RECIPE,
  REMOVE_RECIPE,
  SELECT_RECIPE,
} from "../actions/recipes.actions";

const initialState = {
  recipes,
  filteredRecipes: recipes,
  selectedRecipe: null,
};

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return {
        ...state,
        selectedRecipe: action.recipe,
      };
    case ADD_RECIPE:
      const updatedRecipes = state.recipes;
      updatedRecipes.push(action.recipe);
      return {
        ...state,
        recipes: updatedRecipes,
      };
    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: recipes.push(action.recipe),
      };
    default:
      return state;
  }
};

export default RecipesReducer;
