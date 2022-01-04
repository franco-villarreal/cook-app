import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RecipesReducer from "./reducers/recipes.reducer";
import UserReducer from "./reducers/user.reducer";
import ModalReducer from "./reducers/modal.reducer";

const RootReducer = combineReducers({
  recipes: RecipesReducer,
  user: UserReducer,
  modal: ModalReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
