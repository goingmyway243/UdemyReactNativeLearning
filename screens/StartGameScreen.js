import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../utils/colors";

export default function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputChangeHandler(enteredValue) {
    setEnteredNumber(enteredValue);
  }

  function confirmButtonPressHandler() {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number < 0 || number > 99) {
      Alert.alert(
        "Invalid number!",
        "Number must is a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetNumberHandler }]
      );

      return;
    }

    props.onPickNumber(number);
  }

  function resetNumberHandler() {
    setEnteredNumber("");
  }

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={"position"}>
        <View
          style={[
            styles.screenContainer,
            { marginTop: height < width ? 30 : 100 },
          ]}
        >
          <Title>Guess My Number</Title>
          <Card title="Enter a number">
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={numberInputChangeHandler}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.primaryButton}>
                <PrimaryButton onPress={resetNumberHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.primaryButton}>
                <PrimaryButton onPress={confirmButtonPressHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  primaryButton: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
});
