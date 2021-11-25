import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants";

export const CommonIcon = ({ focused, options = {} }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={options.icon}
        size={options.size}
        color={focused ? Colors.light : Colors.secondary}
      />
      {options.name ? (
        <Text
          style={{
            ...styles.text,
            ...{ color: focused ? Colors.light : Colors.secondary },
          }}
        >
          {options.name}
        </Text>
      ) : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-Medium",
  },
});

export default CommonIcon;
