import { createStore, combineReducers } from "redux";
import RecipesReducer from "./reducers/recipes.reducer";
import UserReducer from "./reducers/user.reducer";

const RootReducer = combineReducers({
  recipes: RecipesReducer,
  user: UserReducer,
});

export default createStore(RootReducer);
