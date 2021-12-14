import React from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import store from "./src/store";
import { AppNavigator } from "./src/navigation";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <>
        <AppNavigator />
        <StatusBar style="auto" />
      </>
    </Provider>
  );
}
