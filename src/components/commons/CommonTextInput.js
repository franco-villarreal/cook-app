import React, { useEffect, useReducer, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors, CommonStyles } from "../../constants";

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

export const CommonTextInput = ({
  placeholder = "",
  multiline = false,
  keyboardType = "default",
  customStyles = {},
  customTextStyles = {},
  onInputChange,
  required = false,
  isEmail = false,
  initialValue = "",
  initialValid = false,
  min,
  max,
  minLength,
  errorText = "Error",
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isValid: initialValid,
    touched: false,
  });
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(inputState.value);
    }
  }, [inputState, onInputChange]);

  const textChangedHandler = (text) => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let isValid = true;

    if (required && text.trim().length === 0) isValid = false;
    if (isEmail && !emailRegex.test(text.toLowerCase())) isValid = false;
    if (min != null && +text < min) isValid = false;
    if (max != null && +text > max) isValid = false;
    if (minLength != null && text.length < minLength) isValid = false;

    console.log(inputState);
    setIsInputValid(isValid);

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid,
      touched: true,
    });
  };
  const onBlurHandler = () => dispatch({ type: INPUT_BLUR });

  return (
    <View style={{ ...styles.inputContainer, ...customStyles }}>
      <TextInput
        placeholder={placeholder}
        value={inputState.value}
        multiline={multiline}
        keyboardType={keyboardType}
        onChangeText={textChangedHandler}
        onBlur={onBlurHandler}
        min={min}
        max={max}
        style={{
          ...CommonStyles.textInputStyle,
          ...styles.text,
          ...customTextStyles,
          borderColor: isInputValid ? Colors.success : Colors.primary,
        }}
      />
      {!inputState.isValid && inputState.touched && (
        <View styles={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
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
  errorContainer: {
    marginVertical: 20,
  },
  errorText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "red",
  },
});

export default CommonTextInput;
