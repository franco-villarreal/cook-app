import React from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";

export const CustomModal = ({ visibility, setModalVisible }) => {
  return (
    <Modal visible={visibility}>
      <View>
        <Text>ERROR</Text>
        <Pressable onPress={() => setModalVisible(!visibility)}>
          <Text>Hide Modal</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default CustomModal;
