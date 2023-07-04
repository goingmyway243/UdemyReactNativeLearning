import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <Text>Hello World!</Text>
      <StatusBar style="auto"></StatusBar>
    </View>
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
