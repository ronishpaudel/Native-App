import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#B6BBC4",
  },
  input: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  inputText: {
    color: "white",
  },
  inputContainer: {
    maxWidth: 800,
    width: "100%",
    gap: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    width: 100,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 150,
    marginTop: 10,
    borderRadius: 6,
  },
});

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.background}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>FormApp</Text>
          <Text style={styles.inputText}>Name</Text>
          <TextInput style={styles.input} placeholder="Name"></TextInput>
          <Text style={styles.inputText}>Address</Text>
          <TextInput style={styles.input} placeholder="Address"></TextInput>
          <Text style={styles.inputText}>Phone no.</Text>
          <TextInput style={styles.input} placeholder="Ph no."></TextInput>
          <TouchableOpacity
            onPress={() => console.log("sir")}
            style={styles.button}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
