import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Profile from "../componet/progress/Profile";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Profile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
