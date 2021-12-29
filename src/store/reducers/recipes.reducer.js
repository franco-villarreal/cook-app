import {
  ADD_RECIPE,
  GET_RECIPES,
  SELECT_RECIPE,
} from "../actions/recipes.actions";

const initialState = {
  recipes: [],
  filteredRecipes: [],
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
      return {
        ...state,
        filteredRecipes: action.recipes,
      };
    case GET_RECIPES:
      return {
        ...state,
        filteredRecipes: action.recipes,
      };
    default:
      return state;
  }
};

export default RecipesReducer;
