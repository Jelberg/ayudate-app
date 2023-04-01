import { SafeAreaView, StyleSheet } from "react-native";
import Test from "../componet/test/Test";
import React from "react";

export default function TestScreen() {
  return (
    <SafeAreaView style={styles.content}>
      <Test />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
