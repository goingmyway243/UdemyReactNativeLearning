import { StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

export default function GuessNumber({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.accent700,
    borderRadius: 16,
    borderWidth: 8,
    margin: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent700,
    fontSize: 36,
    fontWeight: "bold",
  },
});
