import recipes from "../../data/recipes";
import { SELECT_RECIPE } from "../actions/recipes.actions";

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
    default:
      return state;
  }
};

export default RecipesReducer;
