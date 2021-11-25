import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProfileScreen } from "../screens";
import { Colors } from "../constants";

const ProfileStack = createNativeStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light,
        },
        headerTintColor: Colors.title,
      }}
    >
      <ProfileStack.Screen
        options={{
          headerTitle: "What do you wanna do?",
        }}
        name="Profile"
        component={ProfileScreen}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
