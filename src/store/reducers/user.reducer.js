import user from "../../data/user";
import {
  SIGN_IN,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../actions/user.actions";

const initialState = user;

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        ...action.user,
      };
    case ADD_FAVOURITE:
      const favourites = state.favourites;
      favourites.push(action.recipeId);
      console.log(favourites);
      return {
        ...state,
        favourites,
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((id) => id !== action.recipeId),
      };
    default:
      return state;
  }
};

export default UserReducer;
