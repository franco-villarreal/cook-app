import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
