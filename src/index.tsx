import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Auth } from "./features/auth";

export const App = () => {
  return (
    <React.StrictMode>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />

        <Auth />
      </View>
    </React.StrictMode>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
