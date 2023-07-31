import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/context/expenses-context";
import { GetDateMinusDays } from "../utils/date.utils";
import { fetchExpenses } from "../utils/http.utils";

export default function RecentExpensesScreen() {
  const expenseContext = useContext(ExpensesContext);
  const today = new Date();

  useEffect(() => {
    async function getExpenses() {
      const expensesData = await fetchExpenses();
      expenseContext.setExpenses(expensesData);
    }

    getExpenses();
  }, []);

  const recentExpenses = expenseContext.expenses.filter(
    (expense) =>
      expense.date >= GetDateMinusDays(today, 7) && expense.date <= today
  );

  return (
    <ExpensesOutput
      periodName="Last 7 days"
      expenses={recentExpenses}
      fallbackText="There is no expense in recent 7 days"
    />
  );
}
