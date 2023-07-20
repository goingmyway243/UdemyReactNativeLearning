import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function ExpensesSummary({ expenses, periodName }) {
  const sumExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{periodName}</Text>
      <Text style={[styles.text, styles.sumExpenses]}>
        ${sumExpenses.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  text: {
    color: GlobalStyles.colors.primary500,
  },
  sumExpenses: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
