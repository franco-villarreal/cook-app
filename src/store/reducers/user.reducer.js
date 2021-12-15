import {
  REFRESH_USER,
  SIGN_IN,
  SIGN_UP,
  UPDATE_FAVOURITES,
} from "../actions/user.actions";

const initialState = {};

const initialValuesForUser = {
  favourites: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        ...{ ...initialValuesForUser, ...action.user },
      };
    case SIGN_UP:
      return {
        ...state,
        ...{ ...initialValuesForUser, ...action.user },
      };
    case UPDATE_FAVOURITES:
      return {
        ...state,
        ...{ ...initialValuesForUser, ...action.user },
      };
    case REFRESH_USER:
      return {
        ...state,
        ...{ ...initialValuesForUser, ...action.user },
      };
    default:
      return state;
  }
};

export default UserReducer;
