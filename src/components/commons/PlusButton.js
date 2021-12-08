import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Device } from "../../constants";

export const PlusButton = ({ type = "primary", onPress }) => {
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
          +
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
    position: "absolute",
    marginTop: Device.screenHeight / 1.5 - 30,
    marginLeft: Device.screenWidth / 1.2 - 40,
  },
  touchable: {
    borderRadius: 100,
    backgroundColor: Colors.secondaryButton.background,
    width: 60,
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
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
    fontFamily: "Roboto-Bold",
    fontSize: 28,
    color: Colors.secondaryButton.text,
  },
});

export default PlusButton;
