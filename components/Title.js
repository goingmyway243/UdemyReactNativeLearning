import { StyleSheet, Text } from "react-native";
import Colors from "../utils/colors";
export default function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "white",
    padding: 16,
  },
});
