import React, { useState } from "react";
import { View, Text, Button, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { BigButton } from "./commons";
import ImageWithGradient from "./ImageWithGradient";

export const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState(null);
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesita dar permisos", [
        { text: "Ok" },
      ]);
      return false;
    } else {
      return true;
    }
  };
  const handleTakePhoto = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 0.8,
      base64: true,
    });
    setPickedUri(image.uri);
    props.onImage(image);
  };
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        {pickedUri ? (
          <Image
            source={{ uri: pickedUri }}
            style={{ width: "80%", height: 200, borderRadius: 10 }}
          ></Image>
        ) : (
          <View
            style={{
              width: "80%",
              height: 200,
              borderRadius: 10,
              borderColor: "gray",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: "#e3e3e3",
            }}
          >
            <Text style={{ fontSize: 18 }}>No image selected</Text>
          </View>
        )}
      </View>
      <BigButton
        text="Upload image"
        type="secondary"
        onPress={handleTakePhoto}
      />
    </View>
  );
};

export default ImageSelector;
