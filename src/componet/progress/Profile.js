import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import ProgressBarApp from "../../utils/styles/progressBar/ProgressBarApp";
import { getProgressUserAPi } from "../../api/progress";
import { MODULE_NAMES } from "../../utils/constants";

export default function Profile() {
  const bgWidth = "50%";
  const [module, setModule] = useState([]);

  useEffect(() => {
    (async () => {
      await getProgressUserAPi().then((response) => {
        setModule(response);
      });
    })();
  }, []);

  return (
    <View style={styles.constainer}>
      <View style={styles.card}>
        <Text style={styles.titleStyle}>PROGRESO</Text>
        {module.map((element) => (
          <View key={element.module.module} style={styles.containerProgress}>
            <Text style={styles.textModule}>
              {MODULE_NAMES[element.module.module]}
            </Text>
            <ProgressBarApp
              progress={`${element.module.porcentage}%`}
              bgWidth={bgWidth}
              style={styles.progressBar}
            />
            <Text
              style={styles.porcentage}
            >{`${element.module.porcentage}%`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 30,
  },
  titleStyle: {
    fontSize: 27,
    fontWeight: "bold",
  },
  containerProgress: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  textModule: {
    flex: 2,
    fontWeight: "bold",
  },
  progressBar: {
    flex: 1,
  },
  porcentage: {
    flex: 1,
    marginLeft: 5,
    fontWeight: "bold",
  },
});
