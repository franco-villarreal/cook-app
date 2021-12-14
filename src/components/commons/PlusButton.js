import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Device } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

export const PlusButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name="add-circle"
          size={80}
          color={Colors.primaryButton.background}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    position: "absolute",
    marginTop: Device.screenHeight / 1.5,
    marginLeft: Device.screenWidth / 1.2 - 40,
  },
});

export default PlusButton;
