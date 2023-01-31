import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import NavegationStack from "./src/navegation/NavegationStack";

export default function App() {
  return (
    <NavigationContainer>
      <NavegationStack />
    </NavigationContainer>
  );
}
