import { StyleSheet, Text, View } from "react-native";

export default function DetailItem({
  duration,
  complexity,
  affordability,
  textStyle,
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.detailText, textStyle]}>{duration}</Text>
      <Text style={[styles.detailText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  detailText: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
