import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CommonIcon } from "./commons";
import { Colors, Device } from "../constants";

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

  const handleOpenImageLibrary = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
        }}
      >
        {pickedUri ? (
          <Image
            source={{ uri: pickedUri }}
            style={{
              width: Device.screenWidth,
              height: Device.screenHeight / 2,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          ></Image>
        ) : (
          <View
            style={{
              width: Device.screenWidth,
              height: Device.screenHeight / 2,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderColor: "gray",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e3e3e3",
            }}
          >
            <Text style={{ width: "80%", fontSize: 20, textAlign: "center" }}>
              There is no image select, pick one with the buttons below.
            </Text>
          </View>
        )}
      </View>

      <View
        style={{
          width: "100%",
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: -10,
          backgroundColor: Colors.primary,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <TouchableOpacity onPress={handleTakePhoto}>
          <CommonIcon focused={true} options={{ icon: "camera", size: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenImageLibrary}>
          <CommonIcon focused={true} options={{ icon: "image", size: 40 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageSelector;
