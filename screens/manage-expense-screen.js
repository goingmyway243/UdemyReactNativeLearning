import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ExpenseForm from "../components/ExpenseForm";
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/context/expenses-context";

export default function ManageExpenseScreen({ navigation, route }) {
  const expenseId = route.params?.expenseId;
  const expenseContext = useContext(ExpensesContext);
  const selectedExpense = expenseContext.expenses.find(
    (expense) => expense.id === expenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? "Update Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  function cancelHandler() {
    navigation.goBack();
  }

  function submitHandler(expenseData) {
    if (expenseId) {
      expenseContext.updateExpense(expenseId, expenseData);
    } else {
      expenseContext.addExpense(expenseData);
    }
    navigation.goBack();
  }

  function deleteHandler() {
    expenseContext.deleteExpense(expenseId);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitLabel={expenseId ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={submitHandler}
        defaultValue={selectedExpense}
      />
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
  deleteButton: {
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    padding: 4,
    alignItems: "center",
  },
});
