import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NavigationLevels from "./NavigationLevels";
import Icon from "react-native-vector-icons/FontAwesome5";
import TestScreen from "../screens/TestScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NavigationLevels"
        component={NavigationLevels}
        options={{
          headerShown: false,
          tabBarLabel: "Aprender",
          //tabBarLabelStyle: { color: "red" },
          tabBarIcon: ({ color, size }) => (
            <Icon name="chalkboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NavigationTest"
        component={TestScreen}
        options={{
          tabBarLabel: "Test",
          tabBarIcon: ({ color, size }) => (
            <Icon name="stream" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
