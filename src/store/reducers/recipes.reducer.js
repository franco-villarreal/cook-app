import recipes from "../../data/recipes";

const initialState = {
  recipes,
  filteredRecipes: [],
  favouritesRecipes: [],
  selectedRecipe: null,
};

export const RecipesReducer = (state = initialState, action) => {
  return state;
};

export default RecipesReducer;
