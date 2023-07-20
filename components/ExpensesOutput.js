import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({ expenses, periodName }) {
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
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
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
});
