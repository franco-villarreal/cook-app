import React, { useEffect, useReducer, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        touched: action.touched,
      };
    case INPUT_BLUR:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        touched: action.touched,
      };
    default:
      return state;
  }
};
/**
 * TextInput component with customizable properties and validations
 * @param {string} placeholder Input label, default = ''
 * @param {boolean} multiline Enables multiline, default = false
 * @param {string} keyboardType Native keyboard type, default = 'default'
 * @param {function} onInputChange Handler for TextInput onChangeText property
 * @param {boolean} isSecureTextEntry Hides TextInput value, default = false
 * @param {Object} validations Object with validation options (min: number, max: number, required: boolean, isEmail: boolean, minLength: number, maxLength: number)
 * @param {string} errorMessage Text showed in case of validation error, default = 'Error'
 * @param {Object} customStyles Styles object for add extra-styles to TextInput container
 * @param {Object} customTextStyles Styles object used to add extra-styles to TextInput
 * @returns CommonTextInput component
 */
export const CommonTextInput = ({
  placeholder = "",
  multiline = false,
  keyboardType = "default",
  onInputChange,
  isSecureTextEntry = false,
  validations = {},
  errorMessage = "Error",
  customStyles = {},
  customTextStyles = {},
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    touched: false,
  });
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(inputState.value);
    }
  }, [inputState, onInputChange]);

  const textChangedHandler = (text) => {
    const { required, isEmail, min, max, minLength, maxLength } = validations;
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let isValid = true;

    if (required && text.trim().length === 0) isValid = false;
    if (isEmail && !emailRegex.test(text.toLowerCase())) isValid = false;
    if (min != null && +text < min) isValid = false;
    if (max != null && +text > max) isValid = false;
    if (minLength != null && text.length < minLength) isValid = false;
    if (maxLength != null && text.length > maxLength) isValid = false;

    console.log(inputState);
    setIsInputValid(isValid);

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid,
      touched: true,
    });
  };

  return (
    <View style={{ ...styles.inputContainer, ...customStyles }}>
      <TextInput
        placeholder={placeholder}
        value={inputState.value}
        multiline={multiline}
        keyboardType={keyboardType}
        onChangeText={textChangedHandler}
        secureTextEntry={isSecureTextEntry}
        style={{
          ...styles.text,
          ...customTextStyles,
          borderColor: isInputValid ? Colors.success : Colors.primary,
        }}
      />
      {!inputState.isValid && inputState.touched && (
        <View styles={styles.errorMessageContainer}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  errorMessageContainer: {
    marginVertical: 20,
  },
  errorMessage: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "red",
  },
  text: {
    padding: 5,
    paddingHorizontal: 10,
    height: 60,
    borderColor: Colors.primary,
    borderBottomWidth: 3,
    marginBottom: 15,
    width: "80%",
    fontSize: 18,
  },
});

export default CommonTextInput;
