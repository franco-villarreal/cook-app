import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  BigButton,
  CommonTextInput,
  SecureTextInput,
  CustomModal,
} from "./commons";
import { Device, CommonStyles } from "../constants";

export const SignIn = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState({});

  const handleEmailInputChange = (email) => setEmailInput(email);
  const handlePasswordInputChange = (password) => setPasswordInput(password);

  const handleSignIn = () => {
    console.log("Signing in...");
    if (!emailInput) {
      console.log("ERROR");
      setModalText({
        title: "Error",
        text: "Email cannot be empty!",
        confirm: "Retry",
      });
      setModalVisible(true);
    } else if (!passwordInput) {
      console.log("ERROR");
      setModalText({
        title: "Error",
        text: "Password cannot be empty!",
        confirm: "Retry",
      });
      setModalVisible(true);
    } else {
      navigation.navigate("Home");
    }
  };
  const handleSignUp = () => navigation.navigate("SignUp");

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={CommonStyles.titleStyles}>Welcome!</Text>
      </View>

      <View style={styles.inputsContainer}>
        <CommonTextInput
          placeholder="Email"
          onChangeText={handleEmailInputChange}
        />
        <SecureTextInput
          placeholder="Password"
          onChangeText={handlePasswordInputChange}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <BigButton text="Sign In" onPress={handleSignIn} />
        <BigButton
          text="I'm not registered yet"
          type="secondary"
          onPress={handleSignUp}
        />
      </View>

      <CustomModal
        texts={modalText}
        visibility={modalVisible}
        setModalVisible={setModalVisible}
      />
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
  buttonsContainer: {
    flex: 3,
  },
});

export default SignIn;
