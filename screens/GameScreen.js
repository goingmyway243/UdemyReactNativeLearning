import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import GuessNumber from "../components/GuessNumber";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

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
  const initialNumber = generateRandomNumber(
    minBoundary,
    maxBoundary,
    pickedNumber
  );
  const [guessNumber, setGuessNumber] = useState(initialNumber);

  useEffect(() => {
    if (guessNumber === pickedNumber) {
      onGameOver();
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
});
