import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
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
      <Title>Opponent's guess</Title>
      <GuessNumber>{guessNumber}</GuessNumber>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessNumber("higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 40,
  },
});
