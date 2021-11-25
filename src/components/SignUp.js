import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { BigButton, CommonTextInput, SecureTextInput } from "./commons";
import { CommonStyles, Device } from "../constants";

export const SignUp = ({ navigation }) => {
  const [nameInput, setNameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const handleNameInputChange = (name) => setNameInput(name);
  const handleLastnameInputChange = (lastname) => setLastnameInput(lastname);
  const handleEmailInputChange = (email) => setEmailInput(email);
  const handlePasswordInputChange = (password) => setPasswordInput(password);
  const handleConfirmPasswordInputChange = (confirmPassword) =>
    setConfirmPasswordInput(confirmPassword);

  const handleSignUp = () => {
    const payload = {
      name: nameInput,
      lastname: lastnameInput,
      email: emailInput,
      password: passwordInput,
    };
    console.log(`Signing up with ${JSON.stringify(payload)}`);
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
        <CommonTextInput
          placeholder="Name"
          onChangeText={handleNameInputChange}
        />
        <CommonTextInput
          placeholder="Lastname"
          onChangeText={handleLastnameInputChange}
        />
        <CommonTextInput
          placeholder="Email"
          onChangeText={handleEmailInputChange}
        />
        <SecureTextInput
          placeholder="Password"
          onChangeText={handlePasswordInputChange}
        />
        <SecureTextInput
          placeholder="Confirm password"
          onChangeText={handleConfirmPasswordInputChange}
        />
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
    height: Device.windowHeight,
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
