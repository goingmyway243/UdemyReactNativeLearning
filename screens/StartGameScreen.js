import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.primaryButton}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.primaryButton}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "purple",
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
    color: "yellow",
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
});
