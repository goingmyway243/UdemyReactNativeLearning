import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({ expenses, periodName, fallbackText }) {
  let content = <ExpensesList expenses={expenses} />;
  if (expenses.lenght === 0) {
    content = <Text style={styles.fallbackText}>{fallbackText}</Text>;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
  },
  fallbackText: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary200,
    textAlign: "center",
    marginTop: 32,
  },
});
