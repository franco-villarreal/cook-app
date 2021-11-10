import React from "react";
import { Image, StyleSheet, View } from "react-native";
const starIconSrc = require("../icons/star.png");

const ValorationStars = ({ valoration, size = "20", direction = "row" }) => {
  const stars = [];
  for (let i = 0; i < valoration; i++) {
    stars.push(
      <Image
        key={i}
        style={{
          ...styles.starIcon,
          ...{ width: Number(size), height: Number(size) },
        }}
        source={starIconSrc}
      ></Image>
    );
  }
  return (
    <View
      style={{
        ...styles.valorationStarsContainer,
        ...{ flexDirection: direction },
      }}
    >
      {stars}
    </View>
  );
};

const styles = StyleSheet.create({
  valorationStarsContainer: {
    marginVertical: 5,
    flexDirection: "row",
  },
  starIcon: {
    width: 20,
    height: 20,
  },
});
export default ValorationStars;
