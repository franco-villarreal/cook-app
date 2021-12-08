import React, { useState } from "react";
import { View, Text, Button, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const ImageSelectorC = (props) => {
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
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    setPickedUri(image.uri);
    props.onImage(image.uri);
  };
  return (
    <View>
      <View>
        {pickedUri ? (
          <Image
            source={{ uri: pickedUri }}
            style={{ width: "100%", height: "30%" }}
          ></Image>
        ) : (
          <Text>No photo</Text>
        )}
      </View>
      <Button title="Tomar foto" onPress={handleTakePhoto}></Button>
    </View>
  );
};

export default ImageSelectorC;
