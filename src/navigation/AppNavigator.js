import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";

export const AppNavigator = () => {
  const user = useSelector((state) => state.user.token);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
