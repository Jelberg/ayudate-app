import { FlatList, StyleSheet, Text, Button, View } from "react-native";
import React, { useState, useEffect } from "react";
import Player from "./Player";
import { VIDEOS } from "../../utils/constants";

export default function PlayerList(props) {
  const { level } = props;
  const [index, setIndex] = useState(0);

  const videos = VIDEOS.filter((e) => e.type === level);
  const lengthList = videos.length;
  const v = [Object(videos[index])];

  useEffect(() => {
    setIndex(0);
  }, [level]);

  function nextVideo() {
    if (index === lengthList - 1) {
      setIndex(0);
    } else setIndex(index + 1);
  }

  function prevVideo() {
    if (index === 0) {
      setIndex(lengthList - 1);
    } else setIndex(index - 1);
  }

  return (
    <>
      <Text style={styles.title}>Nivel {level}</Text>
      <Text style={styles.title}>
        Video {index + 1} de {lengthList}
      </Text>
      <FlatList
        data={v}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(v) => String(v.id)}
        renderItem={({ item }) => <Player videoId={item} />}
      />
      <View style={styles.buttons}>
        <Button title="Anterior" onPress={prevVideo} />
        <Button title="Siguiente" onPress={nextVideo} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#9733ee",
    marginTop: 25,
  },
  buttons: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
  },
});
