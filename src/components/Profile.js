import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";
import { AddRecipe } from "./AddRecipe";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <View>
        <Text>{user.userId}</Text>
        <AddRecipe />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    height: "100%",
  },
});
export default Profile;
