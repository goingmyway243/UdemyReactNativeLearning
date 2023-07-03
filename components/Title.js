import { Platform, StyleSheet, Text } from "react-native";
export default function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontFamily: "open-sans-bold",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 16,
  },
});
