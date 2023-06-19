import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function handleChangeText(enteredText) {
    setGoalText(enteredText);
  }

  function handleAddGoal() {
    props.onAddGoal(goalText);
    setGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.goalImage}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={handleChangeText}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#cccccc" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" color="#dc143c" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 16,
    width: 100,
  },
  goalImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#cd5c5c",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#cccccc",
    borderRadius: 16,
    padding: 16,
    color: "#c00000",
    width: "100%",
  },
});
