import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import { APP_COLORS } from "../styles";

export default function PrimaryBtn(props) {
  const { title, onPress, bgColor, width, height, marginTop } = props;

  let _color = bgColor ? bgColor : APP_COLORS.purple;
  let _width = width ? width : 200;
  let _height = height ? height : 50;
  let _marginTop = marginTop ? marginTop : 60;

  const stylesContent = () => {
    return {
      marginTop: _marginTop,
    };
  };

  const stylesBtn = () => {
    return {
      width: _width,
      height: _height,
      backgroundColor: _color,
    };
  };

  return (
    <Pressable
      style={[styles.contentButton, stylesContent()]}
      onPress={onPress}
    >
      <Text style={[styles.button, stylesBtn()]}> {title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contentButton: {
    alignItems: "center",
    alignContent: "center",
  },
  button: {
    color: "white",
    borderWidth: 0.3,
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "white",
    textAlign: "center",
    borderRadius: 20,
    paddingTop: "3.6%",
    paddingLeft: 20,
    paddingRight: 20,
    //padding: 10,
  },
});
