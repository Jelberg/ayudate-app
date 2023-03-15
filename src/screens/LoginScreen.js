import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../componet/login/LoginForm";
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
        <View style={styles.signup}>
          <Text style={styles.textSignup}> REGISTRATE</Text>
        </View>

        <View style={styles.login}>
          <Text style={styles.title}>BIENVENIDO!</Text>
          <LoginForm />
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
  signup: {
    marginTop: 60,
    marginBottom: 60,
    marginLeft: 30,
    borderWidth: 1,
    borderColor: "white",
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  textSignup: {
    color: "white",
    fontWeight: "bold",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    fontFamily: "Roboto",
    marginBottom: 60,
  },
});
