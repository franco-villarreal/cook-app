import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("cookapp.db");

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS user (
            userId TEXT PRIMARY KEY NOT NULL, 
            name TEXT NOT NULL, 
            lastname TEXT NOT NULL, 
            email TEXT NOT NULL, 
            token TEXT NOT NULL
            )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const insertUser = (user) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO user (userId, name, lastname, email, token) 
        VALUES ( ?, ?, ?, ?, ?)`,
        [user.userId, user.name, user.lastname, user.email, user.token],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const getUser = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM user`,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};

export const deleteUser = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM user`,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};
