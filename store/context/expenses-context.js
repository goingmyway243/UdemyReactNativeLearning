import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses) => {},
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const editItemIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const editableExpense = state[editItemIndex];
      const editItem = { ...editableExpense, ...action.payload.data };
      const editableExpenses = [...state];
      editableExpenses[editItemIndex] = editItem;
      return editableExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: { ...expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenses,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
