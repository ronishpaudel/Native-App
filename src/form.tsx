import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSnapshot } from "valtio";
import { FormStore } from "../Store/formStore";
4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    padding: 5,
    width: 100,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 150,
    marginTop: 10,
    borderRadius: 6,
    color: "white",
  },
});
function Form({ navigation }: any) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
    console.log({ name });
  };
  const { name, email, address, phone } = useSnapshot(FormStore);

  async function onSubmit() {
    navigation.navigate("Details");
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView contentContainerStyle={styles.background}>
        <StatusBar style="auto" />
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>FormApp</Text>
            <Text style={styles.inputText}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={(text) => FormStore.setName(text)}
            />
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => FormStore.setEmail(text)}
            ></TextInput>
            <Text style={styles.inputText}>Phone no.</Text>
            <TextInput
              style={styles.input}
              placeholder="Ph no."
              keyboardType="numeric"
              value={phone}
              onChangeText={(text) => FormStore.setPhone(text)}
            ></TextInput>
            <Text style={styles.inputText}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={(text) => FormStore.setAddress(text)}
            ></TextInput>

            <TouchableOpacity style={styles.button}>
              <Button title="Submit" onPress={onSubmit} color={"white"} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
export { Form };
