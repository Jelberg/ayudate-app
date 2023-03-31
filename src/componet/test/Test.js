import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import React, { useState } from "react";
import Advance from "./Advance";
import { APP_COLORS } from "../../utils/styles/styles";

export default function Test() {
  const [option, setOption] = useState();

  const list = ["PREGUNTA 1", " PREGUNTA 2", " PREGUNTA 3", " PREGUNTA 4"];

  return (
    <View>
      <Advance progress={"15%"} />
      <View style={styles.content}>
        <Text style={styles.question}>Esta es una Pregunta?</Text>
        {list.map((answer) => (
          <Pressable
            style={[
              styles.contentOptions,
              {
                borderColor: option === 1 ? APP_COLORS.primary : "gray",
              },
            ]}
            onPress={() => {
              setOption(3);
            }}
          >
            <Text style={styles.options}>{answer}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignContent: "center",
    alignItems: "center",
    padding: 20,
  },
  question: {
    fontWeight: "bold",
    fontSize: 25,
  },
  contentOptions: {
    borderWidth: 1,
    marginTop: 15,
    //borderColor: "gray",
    borderBottomWidth: 5,
    alignItems: "center",
    borderRadius: 8,
    width: 280,
    height: 30,
  },
  options: {
    fontSize: 17,
    marginTop: 2,
  },
});
