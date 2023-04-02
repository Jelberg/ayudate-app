import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import PlayerList from "../componet/videos/PlayerList";

export default function LearningScreen(props) {
  const {
    route: { params },
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <PlayerList level={params.level} list={params.videos.videos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
