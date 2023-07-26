import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

export default function ExpenseForm({ submitLabel, onCancel, onSubmit }) {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputValueChangeHandler(identifier, enteredValue) {
    setInputValue((curValue) => {
      return {
        ...curValue,
        [identifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expense = {
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
      description: inputValue.description,
    };

    onSubmit(expense);
  }

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.rowContainer}>
        <CustomInput
          label={"Amount"}
          style={styles.rowInput}
          inputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputValueChangeHandler.bind(this, "amount"),
            value: inputValue.amount,
          }}
        />
        <CustomInput
          label={"Date"}
          style={styles.rowInput}
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputValueChangeHandler.bind(this, "date"),
            value: inputValue.date,
          }}
        />
      </View>
      <CustomInput
        label={"Description"}
        inputConfig={{
          multiline: true,
          onChangeText: inputValueChangeHandler.bind(this, "description"),
          value: inputValue.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.customButton}
          isFlat={true}
          onPress={onCancel}
        >
          Cancel
        </CustomButton>
        <CustomButton style={styles.customButton} onPress={submitHandler}>
          {submitLabel}
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
    color: "white",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  customButton: {
    minWidth: 100,
    marginHorizontal: 16,
  },
});
