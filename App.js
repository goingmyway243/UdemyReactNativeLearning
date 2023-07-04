import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/categories-screen";

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
