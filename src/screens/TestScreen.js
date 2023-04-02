import { SafeAreaView, StyleSheet } from "react-native";
import Test from "../componet/test/Test";
import React from "react";

export default function TestScreen(props) {
  const {
    route: { params },
  } = props;

  return (
    <SafeAreaView style={styles.content}>
      <Test module={params.module} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
