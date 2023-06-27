import { StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

export default function Card({ title, titleStyle, children }) {
  return (
    <View style={styles.cardContainer}>
      {title && <Text style={[styles.cardTitle, titleStyle]}>{title}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.primary600,
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 16,
    alignItems: "center",
  },
  cardTitle: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
