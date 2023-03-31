import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import Advance from "./Advance";
import { APP_COLORS } from "../../utils/styles/styles";
import { getTestModuleOneApi } from "../../api/testModules";

export default function Test() {
  const [option, setOption] = useState();
  const [test, setTest] = useState([]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState("0%");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    (async () => {
      let _test = await getTestModuleOneApi();
      setTest(_test[index]);
      setAnswers(_test[index].options);
    })();
  }, []);

  return (
    <View style={styles.test}>
      <Advance progress={progress} />
      <View style={styles.content}>
        <Text style={styles.question}>{test.question}</Text>
        {answers.map((element) => (
          <Pressable
            id={element.id}
            style={[
              styles.contentOptions,
              {
                borderColor:
                  option === element.id ? APP_COLORS.primary : "gray",
              },
            ]}
            onPress={() => {
              setOption(element.id);
            }}
          >
            <Text style={styles.options}>{element.answer}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    marginTop: 30,
  },
  content: {
    alignContent: "center",
    alignItems: "center",
    padding: 20,
  },
  question: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  contentOptions: {
    borderWidth: 1,
    marginTop: 15,
    borderBottomWidth: 5,
    alignItems: "center",
    borderRadius: 8,
    width: 290,
    //height: 36,
  },
  options: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 4,
    marginRight: 4,
  },
});
