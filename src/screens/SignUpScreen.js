import React from "react";
import { View } from "react-native";
import { Colors } from "../constants";
import SignUp from "../components/SignUp";

const SignUpScreen = ({ navigation }) => {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.light,
      }}
    >
      <SignUp navigation={navigation}></SignUp>
    </View>
  );
};

export default SignUpScreen;
