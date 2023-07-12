import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 6,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "saddlebrown",
  },
  text: {
    color: "saddlebrown",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
