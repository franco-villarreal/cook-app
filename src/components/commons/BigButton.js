import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const BigButton = ({ text, type = "primary", onPress }) => {
  let backgroundColor;
  let textColor;
  switch (type) {
    case "primary":
      backgroundColor = Colors.primaryButton.background;
      textColor = Colors.primaryButton.text;
      break;
    case "secondary":
      backgroundColor = Colors.secondaryButton.background;
      textColor = Colors.secondaryButton.text;
      break;
    default:
      backgroundColor = Colors.primaryButton.background;
      textColor = Colors.primaryButton.text;
      break;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.touchable,
          ...{
            backgroundColor,
          },
        }}
        onPress={onPress}
      >
        <Text
          style={{
            ...styles.text,
            ...{
              color: textColor,
            },
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  touchable: {
    borderRadius: 10,
    backgroundColor: Colors.secondaryButton.background,
    height: 50,
    width: "80%",
    marginHorizontal: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 22,
    color: Colors.secondaryButton.text,
  },
});

export default BigButton;
