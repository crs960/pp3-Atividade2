import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
      <View style={styles.container}>

        <SafeAreaView style={styles.img}>
          <Image
            style={styles.picture}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrKMpsXSt8CM4Zt0lspLovoVYqwOV2IpexQ&s',
            }}
          />
        </SafeAreaView>

        <Text style={styles.texto}>Email:</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.texto}>Senha:</Text>
        <TextInput style={styles.input}/>

        <View style={styles.botoes}>
          <Button
            title="Entrar"
            onPress={() => showAlert()}
            color={"green"}
          />
          <Button
            title="Cadastrar"
            onPress={() => showAlert()}
            color={"blue"}
          />
        </View>
        <Text 
        onPress={() => showAlert()}
        style={styles.textoClicavel}>
          Esqueci minha senha
        </Text>
        
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    maxHeight: 200,
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 150,
    marginBottom: 30
  },
  picture: {
    textAlign: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 30,
    marginRight: 30
  },
  texto: {
    marginLeft: 30,
    marginTop: 10
  },
  botoes: {
    display: "flex",
    gap: 20,
    padding: 30
  },
  textoClicavel: {
    textAlign: "center",
    color: "blue"
  }
});

function showAlert() {
  alert("oi");
}