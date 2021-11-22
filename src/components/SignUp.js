import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { BigButton } from "./commons";
import { CommonStyles, Device } from "../constants";

export const SignUp = ({ navigation }) => {
  const handleSignUp = () => {
    console.log("Signing up...");
    navigation.navigate("SignIn");
  };
  const handleSignIn = () => {
    console.log("Navigate to Sign In Screen");
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={CommonStyles.titleStyles}>Let's sign up!</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            style={CommonStyles.textInputStyle}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Lastname"
            style={CommonStyles.textInputStyle}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={CommonStyles.textInputStyle}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={CommonStyles.textInputStyle}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm"
            style={CommonStyles.textInputStyle}
          ></TextInput>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <BigButton text="Sign Up" onPress={handleSignUp}></BigButton>
        <BigButton
          text="I'm already registered"
          type="secondary"
          onPress={handleSignIn}
        ></BigButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Device.screenHeight,
    marginTop: 30,
    flexDirection: "column",
  },
  titleContainer: {
    marginVertical: 50,
    alignContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    flex: 6,
  },
  inputContainer: {
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 3,
  },
});

export default SignUp;
