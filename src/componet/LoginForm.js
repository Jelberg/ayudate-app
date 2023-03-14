import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function LoginForm() {
  return (
    <View>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        placeholderTextColor="white"
        autoCapitalize="none"
      />

      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholderTextColor="white"
        placeholder="password"
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    color: "white",
    margin: 12,
    borderColor: "white",
    textShadowColor: "white",
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
