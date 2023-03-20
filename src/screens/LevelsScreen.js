import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import PlayerList from "../componet/videos/PlayerList";
import { getListVideosApi } from "../api/videos";
import { useNavigation } from "@react-navigation/native";

export default function LevelsScreen() {
  const [level, setLevel] = useState(1);
  const [videos, setVideos] = useState([]);
  const navigation = useNavigation();

  const videosList = async () => {
    return await getListVideosApi();
  };

  useEffect(() => {
    (async () => {
      const res = await videosList();
      setVideos(res);
    })();
  }, []);

  return (
    <View style={styles.content}>
      <ScrollView>
        <Pressable
          styles={styles.contentBox}
          onPress={() => {
            navigation.navigate("Learning", { level: 1, videos: { videos } });
          }}
        >
          <View style={styles.borderBox}>
            <View style={styles.box}></View>
            <Text style={styles.subtitle}> 1. Nivel 1</Text>
          </View>
        </Pressable>

        <Pressable
          styles={styles.contentBox}
          onPress={() => {
            navigation.navigate("Learning", { level: 2, videos: { videos } });
          }}
        >
          <View style={styles.borderBox}>
            <View style={styles.box}></View>
            <Text style={styles.subtitle}> 2. Nivel 2</Text>
          </View>
        </Pressable>
        <Pressable
          styles={styles.contentBox}
          onPress={() => {
            navigation.navigate("Learning", { level: 3, videos: { videos } });
          }}
        >
          <View style={styles.borderBox}>
            <View style={styles.box}></View>
            <Text style={styles.subtitle}> 3. Nivel 3</Text>
          </View>
        </Pressable>
        <Pressable
          styles={styles.contentBox}
          onPress={() => {
            navigation.navigate("Learning", { level: 4, videos: { videos } });
          }}
        >
          <View style={styles.borderBox}>
            <View style={styles.box}></View>
            <Text style={styles.subtitle}> 4. Nivel 4</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}

//<PlayerList level={level} list={videos} />

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  contentBox: {
    alignItems: "center",
    textAlign: "center",
  },
  borderBox: {
    borderWidth: 1,
    borderColor: "#c427fa",
    padding: 5,
    borderRadius: 15,
    margin: 9,
    alignItems: "center",
    textAlign: "center",
  },
  box: {
    backgroundColor: "#c427fa",
    width: 300,
    height: 120,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9733ee",
  },
});
