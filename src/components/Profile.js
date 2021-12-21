import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { BigButton } from "./commons";
import { signOut } from "../store/actions/user.actions";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.name}>Hello, {user.name}!</Text>
        <Text style={styles.text}>
          Press button below to close your session
        </Text>
      </View>
      <View>
        <BigButton
          text="Sign Out"
          type="secondary"
          onPress={handleSignOut}
        ></BigButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    height: "100%",
  },
  name: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
  },
  userInfoContainer: {
    marginVertical: 20,
  },
});
export default Profile;
