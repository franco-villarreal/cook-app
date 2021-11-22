import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
