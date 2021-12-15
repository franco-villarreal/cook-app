import { FIRESTORE_URL } from "../constants/Firebase";

export class RecipesService {
  constructor() {}

  async getRecipeById(id) {
    const response = await fetch(`${FIRESTORE_URL}/recipes/${id}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!data) {
      return {};
    }

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data;
  }

  async getRecipes() {
    const response = await fetch(`${FIRESTORE_URL}/recipes.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!data) {
      return {};
    }

    if (data.error) {
      throw new Error(data.error.message);
    }

    const recipes = [];

    for (let doc in data) {
      recipes.push(data[doc]);
    }

    return recipes;
  }

  async saveRecipe(payload) {
    // TODO: upload image before save recipe

    const response = await fetch(`${FIRESTORE_URL}/recipes.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...{}, ...payload }),
    });

    const data = await response.json();

    if (!data) {
      return {};
    }

    if (data.error) {
      throw new Error(data.error.message);
    }

    const recipes = await this.getRecipes();

    return recipes;
  }
}

export default RecipesService;
