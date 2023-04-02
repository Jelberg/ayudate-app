import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Player from "./Player";
import PrimaryBtn from "../../utils/styles/buttons/primaryBtn";
import { useNavigation } from "@react-navigation/native";

export default function PlayerList(props) {
  const { level, list } = props;

  const _navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const _videos = list.filter((e) => e.type === level);
  const _lengthList = _videos.length;
  const _currentVideo = _videos[index];

  useEffect(() => {
    setIndex(0);
  }, [level]);

  function nextVideo() {
    if (index === _lengthList - 1) {
      setIndex(0);
    } else setIndex(index + 1);
  }

  function prevVideo() {
    if (index === 0) {
      setIndex(_lengthList - 1);
    } else setIndex(index - 1);
  }

  function goToPage() {
    _navigation.navigate("Test", { module: level });
  }

  const [selectedId, setSelectedId] = useState();
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <TouchableOpacity style={styles.card}>
        <View>
          <Icon name="chevron-right" solid={true} size={15} color="gray" />
        </View>
        <View style={styles.contentTitleVideo}>
          <Text style={styles.titleVideo}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const rItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View>
          <Icon name="chevron-right" solid={true} size={15} color="gray" />
        </View>
        <View style={styles.contentTitleVideo}>
          <Text style={styles.titleVideo}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.player]}>
        <Player videoId={_currentVideo.id} />
      </View>

      <View style={styles.contentTitle}>
        <View style={styles.blockTitle}>
          <Text style={styles.title}>
            Nivel {level}: {_currentVideo.title}
          </Text>
        </View>
        <View style={styles.blockNumber}>
          <Text style={styles.titleNumber}>
            Video {index + 1} de {_lengthList}
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

      <View>
        <FlatList
          data={_videos}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.containerButton}>
        <PrimaryBtn title="TEST" onPress={goToPage} />
      </View>
    </View>
  );
}

//var { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  card: {
    flexDirection: "row",
    borderTopWidth: 1,
    padding: 10,
    borderColor: "#d6d6d6",
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: "center",
  },
  contentTitleVideo: {
    marginHorizontal: 15,
  },
  titleVideo: {
    fontSize: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 15,
  },
});
