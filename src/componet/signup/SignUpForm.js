import { View, StyleSheet, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React, { useState } from "react";
import UserDomain from "../../domain/UserDomain";
import { createUserApi } from "../../api/user";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import PrimaryBtn from "../../utils/styles/buttons/primaryBtn";
import { APP_COLORS } from "../../utils/styles/styles";

export default function SignUpForm() {
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
      const user = new UserDomain();
      user.username = username;
      user.password = password;
      await createUserApi(user).then(() => {
        Alert.alert(
          "Exitoso",
          "Usuario creado con exito, por favor inicie sesion",
          [{ text: "ok", onPress: () => _navigation.navigate("Login") }]
        );
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
          placeholder="Password"
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
      <View style={styles.inputPassword}>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Password again"
          secureTextEntry={isSecret}
        ></TextInput>
      </View>

      <PrimaryBtn
        title="REGISTRATE"
        onPress={formik.handleSubmit}
        bgColor={APP_COLORS.primary}
      />
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
