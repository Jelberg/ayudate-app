import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";

export default function primaryBtn(props) {
  const { title, onPress, bgColor, width, height } = props;

  const colorBtn = () => {
    let color = bgColor ? "#9733ee" : bgColor;
    return {
      backgroundColor: color,
    };
  };

  const proportionsBtn = () => {
    let w = width ? "90%" : width;
    let h = height ? "37%" : height;
    return {
      width: w,
      height: h,
    };
  };

  return (
    <Pressable
      style={[styles.contentButton, proportionsBtn()]}
      onPress={onPress}
    >
      <Text style={[styles.button, colorBtn()]}> {title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contentButton: {
    marginTop: 60,
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
