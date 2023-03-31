import { View, StyleSheet } from "react-native";
import React from "react";
import { APP_COLORS } from "../styles";

export default function ProgressBarApp(props) {
  const { bgWidth, height, barColor, progress } = props;

  let _height = height ? height : 15;
  let _bgWidth = bgWidth ? bgWidth : "70%";
  let _width = progress ? progress : "30%";
  let _barColor = barColor ? barColor : APP_COLORS.primary;

  const styleBgBar = () => {
    return {
      height: _height,
      width: _bgWidth,
    };
  };

  const styleBar = () => {
    return {
      height: _height,
      width: _width,
      backgroundColor: _barColor,
    };
  };

  return (
    <View style={[styles.bgBar, styleBgBar()]}>
      <View style={[styles.bar, styleBar()]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgBar: {
    backgroundColor: APP_COLORS.light_gray,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    borderRadius: 20,
  },
});
