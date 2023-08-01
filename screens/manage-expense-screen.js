import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ErrorOverlay from "../components/ErrorOverlay";
import ExpenseForm from "../components/ExpenseForm";
import IconButton from "../components/IconButton";
import LoadingIndicator from "../components/LoadingIndicator";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/context/expenses-context";
import { addExpense, deleteExpense, updateExpense } from "../utils/http.utils";

export default function ManageExpenseScreen({ navigation, route }) {
  const expenseId = route.params?.expenseId;
  const expenseContext = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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

  async function submitHandler(expenseData) {
    try {
      setIsLoading(true);
      if (expenseId) {
        expenseContext.updateExpense(expenseId, expenseData);
        updateExpense(expenseId, expenseData);
      } else {
        const id = await addExpense(expenseData);
        expenseContext.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (err) {
      setError("Cannot save expense - try again!");
      setIsLoading(false);
    }
  }

  function deleteHandler() {
    try {
      setIsLoading(true);
      expenseContext.deleteExpense(expenseId);
      deleteExpense(expenseId);
      navigation.goBack();
    } catch (err) {
      setError("Cannot delete expense - try again!");
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
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
