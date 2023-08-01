import { useContext, useEffect, useState } from "react";
import ErrorOverlay from "../components/ErrorOverlay";
import ExpensesOutput from "../components/ExpensesOutput";
import LoadingIndicator from "../components/LoadingIndicator";
import { ExpensesContext } from "../store/context/expenses-context";
import { GetDateMinusDays } from "../utils/date.utils";
import { fetchExpenses } from "../utils/http.utils";

export default function RecentExpensesScreen() {
  const expenseContext = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const today = new Date();

  useEffect(() => {
    async function getExpenses() {
      try {
        setIsLoading(true);
        const expensesData = await fetchExpenses();
        expenseContext.setExpenses(expensesData);
      } catch (err) {
        setError("Cannot fecth expenses - try again!");
      }
      setIsLoading(false);
    }

    getExpenses();
  }, []);

  const recentExpenses = expenseContext.expenses.filter(
    (expense) =>
      expense.date.getTime() >= GetDateMinusDays(today, 7).getTime() &&
      expense.date.getTime() <= today.getTime()
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
  }

  return (
    <ExpensesOutput
      periodName="Last 7 days"
      expenses={recentExpenses}
      fallbackText="There is no expense in recent 7 days"
    />
  );
}
