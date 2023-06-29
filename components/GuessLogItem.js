import { StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

export default function GuessLogItem({ roundsNumber, guessNumber }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>#{roundsNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guessNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    backgroundColor: Colors.accent700,
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 24,
    padding: 16,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 8,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
