import React from "react";
import { View } from "react-native";
import Profile from "../components/Profile";
import { Colors } from "../constants/Colors";

export const ProfileScreen = ({ navigation }) => {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.light,
      }}
    >
      <Profile navigation={navigation}></Profile>
    </View>
  );
};

export default ProfileScreen;
