import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const clockIconSrc = require("../icons/wall_clock.png");

const PreparationTime = ({ preparationTimeInMins, size = "28" }) => {
  return (
    <View
      style={{
        ...styles.preparationTimeContainer,
        ...{
          marginBottom: -size - 5,
          padding: 5,
          backgroundColor: "rgba(255,255,255,0.5)",
          borderRadius: 10,
          width: Number(size) + 20,
        },
      }}
    >
      <Image
        style={{
          ...styles.clockIcon,
          ...{ width: Number(size), height: Number(size) },
        }}
        source={clockIconSrc}
      ></Image>
      <Text
        style={{
          ...styles.preparationTimeInMins,
          ...{ fontSize: Number(size) / 1.8 },
        }}
      >
        {preparationTimeInMins}'
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  preparationTimeContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 5,
    margin: 5,
  },
  preparationTimeInMins: {
    marginHorizontal: 5,
    fontFamily: "Roboto-Medium",
    color: "red",
    zIndex: 2,
  },
  clockIcon: {
    zIndex: 1,
  },
});

export default PreparationTime;
