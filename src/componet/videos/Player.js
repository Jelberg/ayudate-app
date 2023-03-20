import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Player(props) {
  const { videoId } = props;
  const [isReady, setIsReady] = useState(true);

  return (
    <YoutubePlayer
      height={200}
      style={styles.player}
      play={false}
      videoId={videoId}
      onReady={() => {
        isReady && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          ></ActivityIndicator>
        );
        //setIsReady(false);
      }}
      // onChangeState={onStateChange}
    />
  );
}

const styles = StyleSheet.create({
  player: {
    flex: 1,
  },
});
