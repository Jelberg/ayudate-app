import { View, Text, Button } from "react-native";
import React from "react";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToPage("Home")} title="Ir a Home" />
    </View>
  );
}
