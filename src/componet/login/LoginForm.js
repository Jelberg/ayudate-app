import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { login } from "../../api/user";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import PrimaryBtn from "../../utils/styles/buttons/primaryBtn";

export default function LoginForm() {
  const _navigation = useNavigation();
  const [isSecret, setIsSecret] = useState(true);
  const [eye, setEye] = useState("eye");

  function setNewStateInputSecret() {
    setIsSecret(!isSecret);
    setEye(isSecret ? "eye-slash" : "eye");
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      const { username, password } = formValue;
      await login(username, password).then((res) => {
        if (Object.keys(res).length === 0)
          Alert.alert("Datos erroneos", "Usuario o contrasena no existen");
        else _navigation.navigate("HomeNavigation");
      });
    },
  });

  function initialValues() {
    return {
      username: "",
      password: "",
    };
  }

  return (
    <View>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        placeholderTextColor="white"
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <View style={styles.inputPassword}>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="white"
          placeholder="password"
          secureTextEntry={isSecret}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        ></TextInput>
        <Icon
          name={eye}
          color="#ffffff"
          size={20}
          onPress={setNewStateInputSecret}
        />
      </View>

      <PrimaryBtn title="INICIAR SESION" onPress={formik.handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    color: "white",
    margin: 12,
    borderColor: "white",
    textShadowColor: "white",
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  inputPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
