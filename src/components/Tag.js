import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const getRandomColor = () => {
  const randomColors = ["red", "green", "gray", "orange", "brown", "violet"];
  return randomColors[Math.round(Math.random() * (randomColors.length - 1))];
};

export const Tag = ({ tags = [] }) => {
  const tagsComponents = [];

  for (let i = 0; i < tags.length; i++) {
    const randomColor = getRandomColor();
    const borderRandomColor = {
      borderColor: randomColor,
    };
    const textRandomColor = {
      color: randomColor,
    };
    tagsComponents.push(
      <View key={i} style={{ ...styles.tagContainer, ...borderRandomColor }}>
        <Text style={{ ...styles.text, ...textRandomColor }}>{tags[i]}</Text>
      </View>
    );
  }
  return <View style={styles.container}>{tagsComponents}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tagContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    marginRight: 5,
  },
  text: {
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
});

export default Tag;
