import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../utils/colors";

export default function GameOverScreen({
  roundsNumber,
  pickedNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  const imageSize = height > width ? 300 : 150;

  const imageStyle = StyleSheet.create({
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  });

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.screenContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.generalText}>
          Your phone needed{" "}
          <Text style={styles.hightlightText}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.hightlightText}>{pickedNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 8,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  generalText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  hightlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
