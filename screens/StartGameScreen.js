import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/colors";

export default function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputChangeHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.primaryButton}>
          <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.primaryButton}>
          <PrimaryButton onPress={confirmButtonPressHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  primaryButton: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: Colors.primary600,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 16,
    alignItems: "center",
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
