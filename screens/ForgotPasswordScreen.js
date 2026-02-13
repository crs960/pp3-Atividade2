import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.titulo}>Esqueceu a senha</Text>

   
      <Text style={styles.texto}>Email:</Text>
      <TextInput style={styles.input}/>

      <View style={styles.botoes}>
        <Button
          title="Enviar"
          onPress={() => showAlert()}
          color={"green"}
        />
        <Button
          title="voltar"
          onPress={() => navigation.goBack()}
          color={"blue"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 45,
    marginBottom: 100,
    marginTop: 70
  },
  texto: {
    marginLeft: 30,
    marginTop: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 30,
    marginRight: 30
  },
  botoes: {
    display: "flex",
    gap: 20,
    padding: 30,
    marginTop: 60
  },
});

function showAlert() {
  alert("oi");
}