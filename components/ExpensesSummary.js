import { Text, View } from "react-native";

export default function ExpensesSummary({ expenses, periodName }) {
  const sumExpenses = expenses
    .reduce((sum, expense) => {
      sum += expense.amount;
    }, 0)
    .toFixed(2);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${sumExpenses}</Text>
    </View>
  );
}
