import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignInScreen, SignUpScreen } from "../screens";
import { Colors } from "../constants";

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light,
        },
        headerTintColor: Colors.title,
      }}
    >
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignInScreen}
      ></AuthStack.Screen>
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUpScreen}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
