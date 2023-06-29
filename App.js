import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function pickNumberHandler(number) {
    setPickedNumber(number);
    setGameOver(false);
  }

  function gameOverHandler(roundsNumber) {
    setGameOver(true);
    setGuessRounds(roundsNumber);
  }

  function startNewGameHandler() {
    setPickedNumber(null);
    setGuessRounds(0);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen pickedNumber={pickedNumber} onGameOver={gameOverHandler} />
    );

    if (isGameOver) {
      screen = (
        <GameOverScreen
          roundsNumber={guessRounds}
          pickedNumber={pickedNumber}
          onStartNewGame={startNewGameHandler}
        />
      );
    }
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent700]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        imageStyle={styles.imageBackground}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
