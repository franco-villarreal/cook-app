export const SELECT_RECIPE = "SELECT_RECIPE";

export const selectRecipe = (recipe) => ({
  type: SELECT_RECIPE,
  recipe,
});
