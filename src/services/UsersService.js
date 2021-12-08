import { FIRESTORE_URL, SIGN_IN_URL, SIGN_UP_URL } from "../constants/Firebase";

export class UsersService {
  constructor() {}

  async signIn(payload) {
    const response = await fetch(SIGN_IN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    const user = await this.getUserById(data.localId);

    return {
      ...user,
      ...{ token: data.idToken },
    };
  }

  async signUp(payload) {
    const response = await fetch(SIGN_UP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    const newUser = {
      [data.localId]: {
        userId: data.localId,
        name: payload.name,
        lastname: payload.lastname,
        email: payload.email,
      },
    };

    await this.saveUser(newUser);

    return {
      ...newUser,
      token: data.idToken,
    };
  }

  async getUserById(id) {
    const response = await fetch(`${FIRESTORE_URL}/users/${id}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data;
  }

  async saveUser(user) {
    const response = await fetch(`${FIRESTORE_URL}/users.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (data.error) {
      console.log(data);
      throw new Error(data.error.message);
    }

    return data;
  }

  async updateUserFavourites(payload) {
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

    if (data.error) {
      console.log(data);
      throw new Error(data.error.message);
    }

    return data;
  }
}

export default UsersService;
