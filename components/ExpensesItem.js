import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { FormatDate as getFormatDate } from "../utils/date.utils";

export default function ExpensesItem({ description, amount, date }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.expensesItem, styles.pressed] : styles.expensesItem
      }
    >
      <View>
        <Text style={[styles.text, styles.description]}>{description}</Text>
        <Text style={styles.text}>{getFormatDate(date)}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expensesItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary400,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    elevation: 8,
    shadowRadius: 16,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  text: {
    color: "white",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    padding: 8,
    minWidth: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
