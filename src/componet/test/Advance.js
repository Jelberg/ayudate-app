import { View, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { APP_COLORS } from "../../utils/styles/styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import ProgressBarApp from "../../utils/styles/progressBar/ProgressBarApp";

export default function Advance(props) {
  const { progress } = props;

  return (
    <View style={styles.content}>
      <Pressable style={styles.iconTimes}>
        <Icon name="times" size={25} color={APP_COLORS.gray} />
      </Pressable>

      <ProgressBarApp barColor={APP_COLORS.good} progress={progress} />

      <View>
        <Text style={styles.textProgress}>{progress}</Text>
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
  textProgress: {
    color: APP_COLORS.gray,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
