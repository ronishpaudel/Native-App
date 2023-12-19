import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground } from "react-native";
import { FormStore } from "../Store/formStore";

function FormDetails({ navigation }: any) {
  function onSubmit() {
    navigation.navigate("Home");
    FormStore.setName("");
    FormStore.setEmail("");
    FormStore.setAddress("");
    FormStore.setPhone("");
  }
  return (
    <ImageBackground
      source={{ uri: "/background.jpg" }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.headerLabel}>Welcome to TechEra</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{FormStore.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.text}>{FormStore.address}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{FormStore.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Phone No:</Text>
            <Text style={styles.text}>{FormStore.phone}</Text>
          </View>
        </View>
        <Button title="Go to Home" onPress={onSubmit} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    maxWidth: 350,
    opacity: 0.9,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  headerLabel: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
});

export { FormDetails };
