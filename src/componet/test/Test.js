import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Advance from "./Advance";
import { APP_COLORS } from "../../utils/styles/styles";
import PrimaryBtn from "../../utils/styles/buttons/primaryBtn";
import { getTestModuleApi } from "../../api/testModules";
import { useNavigation } from "@react-navigation/native";
import { addProgressApi } from "../../api/progress";
import ProgressDomain from "../../domain/ProgressDomain";

export default function Test(props) {
  const { module } = props;
  const _navigation = useNavigation();
  const [option, setOption] = useState(null);
  const [titleQuestion, setTitleQuestion] = useState("");
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState("0%");
  const [answers, setAnswers] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [success, setSuccess] = useState(undefined);
  const [countResult, setCountResult] = useState(0);

  function goToPageLevels() {
    _navigation.navigate("Levels");
  }

  useEffect(() => {
    (async () => {
      await getTestModuleApi(module).then((response) => {
        setTotalQuestions(response.length);
        let _progress = ((index + 1) * 100) / response.length;
        setProgress(Math.trunc(_progress) + "%");
        setTitleQuestion(response[index].question);
        setAnswers(response[index].options);
      });
    })();
  }, [index]);

  function selected(value) {
    value ? setSuccess(1) : setSuccess(0);
  }

  async function nextQuestion() {
    let total = totalQuestions - 1;
    if (index < total && success !== undefined) {
      setIndex(index + 1);
      setCountResult(countResult + success);
      setSuccess(undefined);
      setOption(null);
    } else if (success === undefined) {
      console.log("DEBE SELECCIONAR UNA RESPUESTA");
    } else {
      setCountResult(countResult + success);
      let newProgress = new ProgressDomain({
        module: module.toString(),
        porcentage: Math.trunc((countResult * 100) / totalQuestions),
      });
      await addProgressApi(newProgress).then(() => {
        setIsEnd(true);
      });
    }
  }

  return !isEnd ? (
    <View style={styles.test}>
      <Advance progress={progress} />
      <View style={styles.content}>
        <Text style={styles.question}>{titleQuestion}</Text>
        {answers.map((element) => (
          <Pressable
            key={element.id}
            style={[
              styles.contentOptions,
              {
                borderColor:
                  option === element.id ? APP_COLORS.primary : "gray",
              },
            ]}
            onPress={() => {
              setOption(element.id);
              selected(element.isTrue);
            }}
          >
            <Text style={styles.options}>{element.answer}</Text>
          </Pressable>
        ))}
        <PrimaryBtn
          bgColor={APP_COLORS.turquoise}
          title="SIGUIENTE"
          onPress={nextQuestion}
        />
      </View>
    </View>
  ) : (
    <View style={styles.contentResult}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("../../assets/gif/confetti-gradient.gif")}
      />

      <Text style={styles.titleResult}>FELICIDADES!</Text>
      <Text style={styles.text}>Terminaste el Test</Text>
      <Text style={styles.text}>Aqui estan los resultados</Text>

      <View style={styles.containerResults}>
        <View style={[styles.card, { backgroundColor: APP_COLORS.turquoise }]}>
          <Text style={styles.textResults}>ACIERTOS</Text>
          <Text style={styles.textResults}>{countResult}</Text>
        </View>
        <View style={[styles.card, { backgroundColor: APP_COLORS.yellow }]}>
          <Text style={styles.textResults}>ERRORES</Text>
          <Text style={styles.textResults}>{totalQuestions - countResult}</Text>
        </View>
      </View>

      <PrimaryBtn title="CONTINUAR" onPress={goToPageLevels} />
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    marginTop: 50,
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
  contentResult: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleResult: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },
  text: {
    fontSize: 20,
    color: APP_COLORS.gray,
  },
  containerResults: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBotton: 50,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  textResults: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
