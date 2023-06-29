import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import GuessNumber from "../components/GuessNumber";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import GuessLogItem from "../components/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
  let rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return rndNumber;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ pickedNumber, onGameOver }) {
  const initialNumber = generateRandomNumber(1, 100, pickedNumber);
  const [guessNumber, setGuessNumber] = useState(initialNumber);
  const [guessLogs, setGuessLogs] = useState([initialNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (guessNumber === pickedNumber) {
      onGameOver(guessLogs.length);
    }
  }, [guessNumber, pickedNumber, onGameOver]);

  function nextGuessNumber(direction) {
    if (
      (direction === "lower" && guessNumber < pickedNumber) ||
      (direction === "higher" && guessNumber > pickedNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        "You know this guess if too higher or too lower than the picked number!",
        [{ text: "Sorry" }]
      );
      return;
    }

    if (direction === "lower") {
      maxBoundary = guessNumber;
    } else if (direction === "higher") {
      minBoundary = guessNumber + 1;
    }

    const random = generateRandomNumber(minBoundary, maxBoundary, guessNumber);
    setGuessNumber(random);
    setGuessLogs((logs) => [random, ...logs]);
  }

  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <GuessNumber>{guessNumber}</GuessNumber>
      <Card title="Higher or Lower?">
        <View style={styles.buttonContainer}>
          <View style={styles.primaryButton}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.primaryButton}>
            <PrimaryButton onPress={() => nextGuessNumber("higher")}>
              <Ionicons name="md-add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logsContainer}>
        <FlatList
          data={guessLogs}
          renderItem={(data) => (
            <GuessLogItem
              roundsNumber={guessLogs.length - data.index}
              guessNumber={data.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  primaryButton: {
    flex: 1,
  },
  cardTitle: {
    marginBottom: 8,
  },
  logsContainer: {
    flex: 1,
    padding: 16,
  },
});
