import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScannerBarCode from "./pages/ScannerBarCode";

export default function App() {
  return (
    <View style={styles.container}>
      <ScannerBarCode />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
