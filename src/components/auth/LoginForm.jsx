import { useFormik } from "formik";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { object, string } from "yup";
import { useAuth } from "../../hooks";
import { user, userDetails } from "../../utils";

const initilaValuea = {
  username: "",
  password: "",
};

const validationSchema = {
  username: string().required("El Usuario Es Obligatorio"),
  password: string().required("La Contraseña Es Obligatoria"),
};

export function LoginForm() {
  const [errorLogin, setErrorLogin] = useState(false);

  const { login, auth } = useAuth();

  const handleSubmit = (fields) => {
    const { username, password } = fields;
  
    if (username !== user.username || password !== user.password) {
      setErrorLogin(true);
      return;
    }
    setErrorLogin(false);
    login(userDetails);
  };

  const formik = useFormik({
    initialValues: initilaValuea,
    validationSchema: object(validationSchema),
    validateOnChange: false,
    onSubmit: (fields) => handleSubmit(fields),
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>

      <TextInput
        placeholder="Nombre De Usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />

      <Button title="Entrar" onPress={formik.handleSubmit} />

      {formik.errors.username?.length > 0 && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      {formik.errors.password?.length > 0 && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}

      {
        errorLogin && <Text style={styles.error}>El Usuario o la contraseña no son correctos</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  error: {
    textAlign: "center",
    color: "#842029",
    padding: 6,
    backgroundColor: "#f8d7da",
    borderWidth: 1,
    borderColor: "#f5c2c7",
    marginTop: 20,
  },
});
