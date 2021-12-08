import UsersService from "../../services/UsersService";

export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const UPDATE_FAVOURITES = "UPDATE_FAVOURITES";

const usersService = new UsersService();

export const signIn = (payload) => {
  return async (dispatch) => {
    try {
      const user = await usersService.signIn(payload);

      console.log(`Sign in successfully! ${JSON.stringify(user)}`);

      dispatch({
        type: SIGN_IN,
        user,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signUp = (payload) => {
  return async (dispatch) => {
    try {
      const user = await usersService.signUp(payload);

      console.log(`Sign up successfully! ${JSON.stringify(user)}`);

      dispatch({
        type: SIGN_UP,
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateFavourites = (payload) => {
  return async (dispatch) => {
    try {
      await usersService.updateUserFavourites(payload);

      const user = await usersService.getUserById(payload.userId);

      dispatch({
        type: UPDATE_FAVOURITES,
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
