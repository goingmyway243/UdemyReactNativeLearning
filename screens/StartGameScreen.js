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
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "purple",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 16,
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
