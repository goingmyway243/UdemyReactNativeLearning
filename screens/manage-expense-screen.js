import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/context/expenses-context";

export default function ManageExpenseScreen({ navigation, route }) {
  const expenseId = route.params?.expenseId;
  const expenseContext = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? "Update Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    const testData = {
      description: "Test!!!",
      amount: 19.99,
      date: new Date(),
    };

    if (expenseId) {
      expenseContext.updateExpense(expenseId, testData);
    } else {
      expenseContext.addExpense(testData);
    }
    navigation.goBack();
  }

  function deleteHandler() {
    expenseContext.deleteExpense(expenseId);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.customButton}
          isFlat={true}
          onPress={cancelHandler}
        >
          Cancel
        </CustomButton>
        <CustomButton style={styles.customButton} onPress={confirmHandler}>
          {expenseId ? "Update" : "Confirm"}
        </CustomButton>
      </View>
      {expenseId && (
        <View style={styles.deleteButton}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
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
  deleteButton: {
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    padding: 4,
    alignItems: "center",
  },
});
