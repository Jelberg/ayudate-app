import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import Profile from "../componet/progress/Profile";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/background.png")}
        resizeMode="cover"
      >
        <Profile />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
});
