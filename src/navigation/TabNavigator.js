import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonIcon } from "../components/commons";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import FavouritesNavigator from "./FavouritesNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { Colors } from "../constants";

const BottomTabs = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <CommonIcon
              focused={focused}
              options={{ icon: "md-home", size: 28 }}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="FavouritesTab"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <CommonIcon
              focused={focused}
              options={{ icon: "md-heart-sharp", size: 28 }}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <CommonIcon
              focused={focused}
              options={{ icon: "md-person-sharp", size: 28 }}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.primary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 60,
    padding: 5,
  },
});

export default TabNavigator;
