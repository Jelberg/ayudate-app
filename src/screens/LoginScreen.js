import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../componet/login/LoginForm";
import React from "react";

export default function LoginScreen(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#9733ee", "#c427fa"]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.9]}
      >
        <Pressable style={styles.signup} onPress={goToPage}>
          <Text style={styles.textSignup}> REGISTRATE</Text>
        </Pressable>

        <View style={styles.imgLogo}>
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 100, height: 100 }}
          />
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
  imgLogo: {
    alignItems: "center",
    marginTop: 30,
  },
  signup: {
    marginTop: 60,
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
