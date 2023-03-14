import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navegation/NavigationStack";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
