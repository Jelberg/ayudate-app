import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NavigationLevels from "./NavigationLevels";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="NavigationLevels"
        component={NavigationLevels}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
