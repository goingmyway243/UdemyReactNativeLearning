import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/context/expenses-context";

export default function AllExpensesScreen() {
  const expenseContext = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      periodName="Total"
      expenses={expenseContext.expenses}
      fallbackText="There is no expense to show"
    />
  );
}
