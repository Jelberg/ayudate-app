import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React, { useState } from "react";

export default function SignUpForm() {
  const [isSecret, setIsSecret] = useState(true);
  const [eye, setEye] = useState("eye");

  function setNewStateInputSecret() {
    setIsSecret(!isSecret);
    setEye(isSecret ? "eye-slash" : "eye");
  }

  const [isSecretAgain, setIsSecretAgain] = useState(true);
  const [eyeAgain, setEyeAgain] = useState("eye");

  function setNewStateInputSecretAgain() {
    setIsSecretAgain(!isSecretAgain);
    setEyeAgain(isSecretAgain ? "eye-slash" : "eye");
  }

  return (
    <View>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        placeholderTextColor="white"
        autoCapitalize="none"
      />
      <View style={styles.inputPassword}>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Password"
          secureTextEntry={isSecret}
        ></TextInput>
        <Icon
          name={eye}
          color="#ffffff"
          size={20}
          onPress={setNewStateInputSecret}
        />
      </View>
      <View style={styles.inputPassword}>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Password again"
          secureTextEntry={isSecretAgain}
        ></TextInput>
        <Icon
          name={eye}
          color="#ffffff"
          size={20}
          onPress={setNewStateInputSecretAgain}
        />
      </View>
      <View style={styles.contentButton}>
        <Text style={styles.button}> REGISTRARSE</Text>
      </View>
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
  inputPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentButton: {
    marginTop: 60,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#da22fe",
    color: "white",
    borderWidth: 0.3,
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "white",
    width: "90%",
    height: "35%",
    textAlign: "center",
    borderRadius: 20,
    padding: 10,
  },
});
