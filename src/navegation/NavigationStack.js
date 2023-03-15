import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import NavigationTab from "./NavigationTab";
import Icon from "react-native-vector-icons/FontAwesome5";

const Stack = createNativeStackNavigator();

export default function NavigationStack(props) {
  const { navigation } = props;
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerTitleStyle: { color: "white" },
        }}
      />
      <Stack.Screen
        name="HomeNavigation"
        component={NavigationTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
