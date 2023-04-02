import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LevelsScreen from "../screens/LevelsScreen";
import LearningScreen from "../screens/LearningScreen";
import TestScreen from "../screens/TestScreen";

const Stack = createNativeStackNavigator();

export default function NavigationLevels() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Levels"
        component={LevelsScreen}
        options={{ title: "Modulos de Aprendizaje" }}
      />
      <Stack.Screen
        name="Learning"
        component={LearningScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Test"
        component={TestScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Test",
        }}
      />
    </Stack.Navigator>
  );
}
