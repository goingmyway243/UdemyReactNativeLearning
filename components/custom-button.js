import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";

export default function CustomButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary700,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 8,
    elevation: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.primary50,
  },
  pressed: {
    opacity: 0.5,
  },
});
