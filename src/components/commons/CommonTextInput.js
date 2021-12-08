import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { CommonStyles } from "../../constants";

//TODO: mappear el keyboardType y el value
//TODO: mejorar el componente genérico con expresiones regulares ver guia clase 14

export const CommonTextInput = ({ placeholder = "", value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={CommonStyles.textInputStyle}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
  },
});

export default CommonTextInput;
