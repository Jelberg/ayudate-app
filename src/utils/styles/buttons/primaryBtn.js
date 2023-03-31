import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import { APP_COLORS } from "../styles";

export default function PrimaryBtn(props) {
  const { title, onPress, bgColor, width, height, marginTop } = props;

  const stylesContent = () => {
    let marginT = marginTop ? marginTop : 60;
    return {
      marginTop: marginT,
    };
  };

  const stylesBtn = () => {
    let color = bgColor ? bgColor : APP_COLORS.purple;
    let w = width ? width : "90%";
    let h = height ? height : "37%";
    return {
      width: w,
      height: h,
      backgroundColor: color,
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
  },
  button: {
    color: "white",
    borderWidth: 0.3,
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "white",
    textAlign: "center",
    borderRadius: 20,
    padding: 10,
  },
});
