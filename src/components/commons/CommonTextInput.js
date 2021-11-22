import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { CommonStyles } from "../../constants";

export const CommonTextInput = ({ placeholder = "", onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
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
