import { StyleSheet, Text, Pressable, View } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Player from "./Player";

export default function PlayerList(props) {
  const { level, list } = props;

  const [index, setIndex] = useState(0);
  const videos = list.filter((e) => e.type === level);

  const lengthList = videos.length;
  const v = videos[index];

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
    <View style={styles.container}>
      <View style={[styles.player]}>
        <Player videoId={v.id} />
      </View>

      <View style={styles.contentTitle}>
        <View style={styles.blockTitle}>
          <Text style={styles.title}>
            Nivel {level}: {v.title}
          </Text>
        </View>
        <View style={styles.blockNumber}>
          <Text style={styles.titleNumber}>
            Video {index + 1} de {lengthList}
          </Text>
          <View style={styles.buttons}>
            <Icon
              name="caret-left"
              color="black"
              size={30}
              onPress={prevVideo}
              style={styles.iconArrow}
            />
            <Icon
              name="caret-right"
              color="black"
              size={30}
              onPress={nextVideo}
              style={styles.iconArrow}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

//var { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  player: {
    marginTop: 40,
  },
  contentTitle: {
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  blockTitle: {
    width: "60%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5c2d75",
  },
  titleNumber: {
    marginRight: 5,
    fontSize: 15,
    color: "#5c2d75",
  },
  blockNumber: {
    width: "40%",
    alignItems: "flex-end",
  },
  buttons: {
    flexDirection: "row",
  },
  iconArrow: {
    paddingHorizontal: 15,
  },
});
