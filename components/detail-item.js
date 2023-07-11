import { StyleSheet, Text, View } from "react-native";

export default function DetailItem({ duration, complexity, affordability }) {
  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>{duration}</Text>
      <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailText: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
