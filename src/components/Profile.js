import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import User from "../data/user";
import { Colors } from "../constants";

const Profile = ({ navigation }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const actualUser = User;
    setUser(actualUser);
  });
  return (
    <View style={styles.container}>
      <View>
        <Text>{user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
});
export default Profile;
