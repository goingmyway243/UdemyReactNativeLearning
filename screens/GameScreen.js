import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's guess</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 40,
  },
});
