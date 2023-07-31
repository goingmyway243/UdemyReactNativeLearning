import axios from "axios";

const BASE_URL =
  "https://react-native-udemy-c0afa-default-rtdb.asia-southeast1.firebasedatabase.app";

export function addExpense(expense) {
  axios.post(BASE_URL + "/expense.json", expense);
}

export async function fetchExpenses() {
  const result = await axios.get(BASE_URL + "/expense.json");

  const expenses = [];

  for (const key in result.data) {
    const expenseObj = {
      id: key,
      amount: result.data[key].amount,
      date: new Date(result.data[key].date),
      description: result.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}
