import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LevelsScreen from "../screens/LevelsScreen";
import LearningScreen from "../screens/LearningScreen";

const Stack = createNativeStackNavigator();

export default function NavigationLevels() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Levels" component={LevelsScreen} />
      <Stack.Screen
        name="Learning"
        component={LearningScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
