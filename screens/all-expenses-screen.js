import { useContext, useEffect, useState } from "react";
import ErrorOverlay from "../components/ErrorOverlay";
import ExpensesOutput from "../components/ExpensesOutput";
import LoadingIndicator from "../components/LoadingIndicator";
import { ExpensesContext } from "../store/context/expenses-context";
import { fetchExpenses } from "../utils/http.utils";

export default function AllExpensesScreen() {
  const expenseContext = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getExpenses() {
      try {
        setIsLoading(true);
        const expensesData = await fetchExpenses();
        expenseContext.setExpenses(expensesData);
      } catch (err) {
        setError("Cannot fetch expenses - try again!");
      }
      setIsLoading(false);
    }

    getExpenses();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
  }

  return (
    <ExpensesOutput
      periodName="Total"
      expenses={expenseContext.expenses}
      fallbackText="There is no expense to show"
    />
  );
}
