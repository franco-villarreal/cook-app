import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { BigButton, CommonTextInput, CustomModal } from "./commons";
import { CommonStyles, Device, ErrorMessage } from "../constants";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/user.actions";
import { updateModal } from "../store/actions/modal.actions";

export const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
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
  const handleSignUp = async () => {
    if (
      nameInput === "" ||
      lastnameInput === "" ||
      emailInput === "" ||
      passwordInput === "" ||
      confirmPasswordInput === ""
    ) {
      console.log("ERROR");
      dispatch(
        updateModal({
          texts: {
            title: "Error",
            text: "Fields cannot be empty!",
            confirm: "Retry",
          },
          visibility: true,
        })
      );
      return;
    }
    if (passwordInput !== confirmPasswordInput) {
      console.log("ERROR");
      dispatch(
        updateModal({
          texts: {
            title: "Error",
            text: ErrorMessage.PASSWORDS_DOES_NOT_MATCH,
            confirm: "Retry",
          },
          visibility: true,
        })
      );
      return;
    }
    const payload = {
      name: nameInput.trim(),
      lastname: lastnameInput.trim(),
      email: emailInput.trim(),
      password: passwordInput.trim(),
    };
    dispatch(signUp(payload));
  };
  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={CommonStyles.titleStyles}>Let's sign up!</Text>
      </View>
      <ScrollView style={styles.inputsContainer}>
        <CommonTextInput
          placeholder="Name"
          onInputChange={handleNameInputChange}
          validations={{
            required: true,
          }}
          errorMessage={ErrorMessage.INVALID_NAME}
        />
        <CommonTextInput
          placeholder="Lastname"
          onInputChange={handleLastnameInputChange}
          validations={{
            required: true,
          }}
          errorMessage={ErrorMessage.INVALID_LASTNAME}
        />
        <CommonTextInput
          placeholder="Email"
          onInputChange={handleEmailInputChange}
          validations={{
            required: true,
            isEmail: true,
          }}
          errorMessage={ErrorMessage.INVALID_EMAIL}
        />
        <CommonTextInput
          placeholder="Password"
          onInputChange={handlePasswordInputChange}
          isSecureTextEntry={true}
          validations={{
            required: true,
          }}
          errorMessage={ErrorMessage.INVALID_PASSWORD}
        />
        <CommonTextInput
          placeholder="Confirm password"
          onInputChange={handleConfirmPasswordInputChange}
          isSecureTextEntry={true}
          validations={{
            required: true,
          }}
          errorMessage={ErrorMessage.INVALID_PASSWORD}
        />
        <View style={styles.buttonsContainer}>
          <BigButton text="Sign Up" onPress={handleSignUp}></BigButton>
          <BigButton
            text="I'm already registered"
            type="secondary"
            onPress={handleSignIn}
          ></BigButton>
        </View>
      </ScrollView>

      <CustomModal />
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
  inputsContainer: {},
  inputContainer: {
    alignItems: "center",
    flex: 6,
  },
  buttonsContainer: {
    flex: 3,
    marginVertical: 50,
  },
});

export default SignUp;
