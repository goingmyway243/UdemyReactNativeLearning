import { StyleSheet, Text, View } from "react-native";

export default function List({ data }) {
  return (
    <View>
      {data.map((item) => (
        <View key={item} style={styles.textContainer}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "burlywood",
    borderRadius: 8,
    marginVertical: 4,
    padding: 4,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "saddlebrown",
  },
});
