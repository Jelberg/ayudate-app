import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import PlayerList from "../componet/videos/PlayerList";
export default function VideosScreen() {
  const [level, setLevel] = useState(1);
  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.title}>VIDEOS</Text>

        <ScrollView horizontal={true} style={styles.listRow}>
          <Pressable
            styles={styles.contentBox}
            onPress={() => {
              setLevel(1);
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
              setLevel(2);
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
              setLevel(3);
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
              setLevel(4);
            }}
          >
            <View style={styles.borderBox}>
              <View style={styles.box}></View>
              <Text style={styles.subtitle}> 4. Nivel 4</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>

      <PlayerList level={level} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9733ee",
    marginBottom: 25,
  },
  listRow: {
    flexDirection: "row",
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
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9733ee",
  },
});
