import React from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ValorationStars from "./ValorationStars";
import PreparationTime from "./PreparationTime";

export const ImageWithGradient = ({
  recipe,
  imageStyles = {},
  containerStyle = {},
}) => {
  return (
    <View style={containerStyle}>
      <Image style={imageStyles} source={{ uri: recipe.url }}></Image>
      <LinearGradient
        colors={[
          "transparent",
          "rgba(255,255,255,0.2)",
          "rgba(255,255,255,0.4)",
          "rgba(255,255,255,0.7)",
          "rgba(255,255,255,1)",
        ]}
        style={{ height: 50, marginTop: -50 }}
      ></LinearGradient>
      <View
        style={{
          flexDirection: "row-reverse",
          marginTop: -50,
        }}
      >
        <ValorationStars valoration={recipe.valoration} />
        <PreparationTime preparationTimeInMins={recipe.preparationTimeInMins} />
      </View>
    </View>
  );
};

export default ImageWithGradient;
