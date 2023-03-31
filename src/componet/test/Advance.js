import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import { APP_COLORS } from "../../utils/styles/styles";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Advance(props) {
  const { progress } = props;

  const getProgress = () => {
    let percentage = progress ? progress + "%" : "10%";
    return {
      width: percentage,
    };
  };

  return (
    <View style={styles.content}>
      <Pressable style={styles.iconTimes}>
        <Icon name="times" size={25} color={APP_COLORS.gray} />
      </Pressable>
      <View style={styles.bgBar}>
        <View style={[styles.bar, getProgress()]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  iconTimes: {
    marginRight: 20,
  },
  bgBar: {
    backgroundColor: APP_COLORS.light_gray,
    width: "70%",
    height: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    backgroundColor: APP_COLORS.good,
    height: 15,
    borderRadius: 20,
  },
});
