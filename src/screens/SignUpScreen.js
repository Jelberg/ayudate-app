import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignUpForm from "../componet/signup/SignUpForm";
import React from "react";

export default function SignUpScreen() {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#da22fe", "#a52ff3"]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.9]}
      >
        <View style={styles.contentSignup}>
          <Text style={styles.title}>HELLO MY FRIEND!</Text>
          <Text style={styles.text}>
            Llena los datos a continuacion. Si ya posees cuenta inicia sesion
          </Text>
          <SignUpForm />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  contentSignup: {
    marginTop: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    fontFamily: "Roboto",
    marginBottom: 30,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginLeft: "7%",
    marginRight: "7%",
    marginBottom: 15,
  },
});
