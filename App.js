import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>Hello World</Text>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
