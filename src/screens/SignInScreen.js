import React from "react";
import { View } from "react-native";
import { Colors } from "../constants";
import SignIn from "../components/SignIn";

const SignInScreen = ({ navigation }) => {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.light,
      }}
    >
      <SignIn navigation={navigation}></SignIn>
    </View>
  );
};

export default SignInScreen;
