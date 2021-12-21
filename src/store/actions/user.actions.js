import UsersService from "../../services/UsersService";
import { getUser, insertUser } from "../../database";

export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const UPDATE_FAVOURITES = "UPDATE_FAVOURITES";
export const REFRESH_USER = "REFRESH_USER";
export const SIGN_OUT = "SIGN_OUT";

const usersService = new UsersService();

export const signIn = (payload) => {
  return async (dispatch) => {
    try {
      signOut();
      const user = await usersService.signIn(payload);

      console.log(`Sign in successfully! ${JSON.stringify(user)}`);

      const result = await insertUser(user);

      console.log(result);

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

export const signOut = () => {
  return async (dispatch) => {
    try {
      await usersService.signOut();

      dispatch({
        type: SIGN_OUT,
        user: {
          token: null,
        },
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

export const refreshUser = () => {
  return async (dispatch) => {
    try {
      let user = {};
      const data = await getUser();

      if (data.rows._array[0]) {
        const session = data.rows._array[0];
        console.log(session);
        user = await usersService.getUserById(session.userId);
        user.token = session.token;
        console.log(user);
      }

      dispatch({
        type: REFRESH_USER,
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
