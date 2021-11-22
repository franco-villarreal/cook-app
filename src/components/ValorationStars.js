import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const starIconSrc = require("../icons/star.png");

const ValorationStars = ({ valoration, size = "28" }) => {
  return (
    <View
      style={{
        ...styles.valorationStarsContainer,
        ...{
          marginBottom: -size - 5,
          padding: 5,
          backgroundColor: "rgba(255,255,255,0.5)",
          borderRadius: 10,
          width: Number(size) + 18,
        },
      }}
    >
      <Image
        style={{
          ...styles.starIcon,
          ...{ width: Number(size), height: Number(size) },
        }}
        source={starIconSrc}
      ></Image>
      <Text
        style={{
          zIndex: 2,
          fontSize: Number(size) / 1.8,
          fontFamily: "Roboto-Medium",
          color: "green",
        }}
      >
        {valoration.toFixed(1)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  valorationStarsContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  starIcon: {
    zIndex: 1,
  },
});
export default ValorationStars;
