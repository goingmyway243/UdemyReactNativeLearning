import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { FormatDate } from "../utils/date.utils";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

export default function ExpenseForm({
  submitLabel,
  onCancel,
  onSubmit,
  defaultValue,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? FormatDate(defaultValue.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description.toString() : "",
      isValid: true,
    },
  });

  function inputValueChangeHandler(identifier, enteredValue) {
    setInputs((curValue) => {
      return {
        ...curValue,
        [identifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expense = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isAmountValid = !isNaN(expense.amount) && expense.amount > 0;
    const isDateValid = expense.date.toString() !== "Invalid Date";
    const isDescriptionValid = expense.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      setInputs((curValue) => {
        return {
          amount: {
            value: curValue.amount.value,
            isValid: isAmountValid,
          },
          date: {
            value: curValue.date.value,
            isValid: isDateValid,
          },
          description: {
            value: curValue.description.value,
            isValid: isDescriptionValid,
          },
        };
      });

      return;
    }

    onSubmit(expense);
  }

  const isFormInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.rowContainer}>
        <CustomInput
          label={"Amount"}
          style={styles.rowInput}
          isInvalid={!inputs.amount.isValid}
          inputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputValueChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <CustomInput
          label={"Date"}
          style={styles.rowInput}
          isInvalid={!inputs.date.isValid}
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputValueChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <CustomInput
        label={"Description"}
        isInvalid={!inputs.description.isValid}
        inputConfig={{
          multiline: true,
          onChangeText: inputValueChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {isFormInvalid && (
        <Text style={styles.invalidText}>
          Your current inputs are invalid. Please check again!
        </Text>
      )}
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
  invalidText: {
    fontSize: 16,
    color: GlobalStyles.colors.error500,
    textAlign: "center",
  },
});
