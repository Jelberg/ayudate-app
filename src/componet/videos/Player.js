import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Player(props) {
  const { videoId } = props;
  const [isReady, setIsReady] = useState(true);

  return (
    <View>
      <View>
        <YoutubePlayer
          height={250}
          play={false}
          videoId={videoId.id}
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listPlayer: {
    flexDirection: "row",
  },
});
