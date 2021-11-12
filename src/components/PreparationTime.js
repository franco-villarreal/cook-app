import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const clockIconSrc = require("../icons/clock_black.png");

const PreparationTime = ({
  preparationTimeInMins,
  size = "18",
  direction = "row",
}) => {
  return (
    <View
      style={{
        ...styles.preparationTimeContainer,
        ...{ flexDirection: direction },
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
          ...{ fontSize: Number(size) - 4 },
        }}
      >
        {preparationTimeInMins} min
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  preparationTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  preparationTimeInMins: {
    marginHorizontal: 5,
  },
  clockIcon: {},
});

export default PreparationTime;
