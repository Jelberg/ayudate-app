import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProgressBarApp from "../../utils/styles/progressBar/ProgressBarApp";

export default function Profile() {
  const bgWidth = "50%";
  const progress = "40%";
  return (
    <View style={styles.constainer}>
      <View style={styles.card}>
        <Text style={styles.titleStyle}>PROGRESO</Text>
        <View style={styles.containerProgress}>
          <Text style={styles.textModule}>NUTRICION</Text>
          <ProgressBarApp
            progress={progress}
            bgWidth={bgWidth}
            style={styles.progressBar}
          />
          <Text style={styles.porcentage}>{progress}</Text>
        </View>
        <View style={styles.containerProgress}>
          <Text style={styles.textModule}>AUTOESTIMA</Text>
          <ProgressBarApp
            progress={progress}
            bgWidth={bgWidth}
            style={styles.progressBar}
          />
          <Text style={styles.porcentage}>{progress}</Text>
        </View>
        <View style={styles.containerProgress}>
          <Text style={styles.textModule}>HAILIDADES EMOCIONALES</Text>
          <ProgressBarApp
            progress={progress}
            bgWidth={bgWidth}
            style={styles.progressBar}
          />
          <Text style={styles.porcentage}>{progress}</Text>
        </View>
        <View style={styles.containerProgress}>
          <Text style={styles.textModule}>HABILIDADES SOCIALES</Text>
          <ProgressBarApp
            progress={progress}
            bgWidth={bgWidth}
            style={styles.progressBar}
          />
          <Text style={styles.porcentage}>{progress}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  card: {
    alignContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gary",
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
