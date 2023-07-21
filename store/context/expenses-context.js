import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Shoes",
    amount: 12.55,
    date: new Date("2020-02-28"),
  },
  {
    id: "e2",
    description: "Clothes",
    amount: 50.05,
    date: new Date("2020-02-28"),
  },
  {
    id: "e3",
    description: "Perfume",
    amount: 33.44,
    date: new Date("2021-11-11"),
  },
  {
    id: "e4",
    description: "Mousepad",
    amount: 9.33,
    date: new Date("2020-07-28"),
  },
  {
    id: "e5",
    description: "Figure",
    amount: 12.55,
    date: new Date("2022-03-09"),
  },
  {
    id: "e6",
    description: "Ticket",
    amount: 40.39,
    date: new Date("2022-08-31"),
  },
  {
    id: "e7",
    description: "Watch",
    amount: 53.0,
    date: new Date("2021-08-24"),
  },
  {
    id: "e8",
    description: "Headsets",
    amount: 20.18,
    date: new Date("2022-06-17"),
  },
  {
    id: "e9",
    description: "PC",
    amount: 77.77,
    date: new Date("2021-01-28"),
  },
  {
    id: "e10",
    description: "Phone",
    amount: 99.99,
    date: new Date("2023-05-17"),
  },
  {
    id: "e11",
    description: "Bananas",
    amount: 20.55,
    date: new Date("2022-12-28"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random();
      return [{ id: id, ...action.payload }, ...state];
    case "UPDATE":
      const editItemIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const editableExpenses = [...state];
      const editableExpense = state[editItemIndex];
      const editItem = { ...editableExpense, ...action.payload.data };
      return (editableExpenses[editItemIndex] = editItem);
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

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
