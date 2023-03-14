import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../componet/LoginForm";
import React from "react";

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#9733ee", "#c427fa"]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.9]}
      >
        <Text style={styles.title}>BIENVENIDO!</Text>
        <LoginForm />
      </LinearGradient>
      <View style={styles.white}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80%",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    fontFamily: "Roboto",
    marginBottom: 60,
  },
  white: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
  },
});
