import {
  FIRESTORE_URL,
  AUTHENTICATION_URL,
  AUTHENTICATION_API_KEY,
} from "../constants/Firebase";
import { deleteUser } from "../database";
export class UsersService {
  constructor() {}

  async signIn(payload) {
    try {
      const response = await fetch(
        `${AUTHENTICATION_URL}/v1/accounts:signInWithPassword?key=${AUTHENTICATION_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      const user = await this.getUserById(data.localId);

      return {
        ...user,
        ...{ token: data.idToken },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async signUp(payload) {
    try {
      const response = await fetch(
        `${AUTHENTICATION_URL}/v1/accounts:signUp?key=${AUTHENTICATION_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      const newUser = {
        userId: data.localId,
        name: payload.name,
        lastname: payload.lastname,
        email: payload.email,
      };

      await this.saveUser(newUser);

      return {
        ...newUser,
        token: data.idToken,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async signOut() {
    await deleteUser();
  }

  async getUserById(id) {
    try {
      const response = await fetch(`${FIRESTORE_URL}/users/${id}.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async saveUser(user) {
    try {
      const response = await fetch(
        `${FIRESTORE_URL}/users/${user.userId}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateUserFavourites(payload) {
    try {
      const response = await fetch(
        `${FIRESTORE_URL}/users/${payload.userId}/.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ favourites: payload.favourites }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default UsersService;
