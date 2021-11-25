import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
