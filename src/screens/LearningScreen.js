import { View } from "react-native";
import React from "react";
import PlayerList from "../componet/videos/PlayerList";

export default function LearningScreen(props) {
  const {
    route: { params },
  } = props;

  return (
    <View>
      <PlayerList level={params.level} list={params.videos.videos} />
    </View>
  );
}
