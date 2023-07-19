import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View>
      <ExpensesSummary periodName={periodName} />
      <ExpensesList />
    </View>
  );
}
