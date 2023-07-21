import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function CustomButton({ children, onPress, isFlat, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.onPress}
      >
        <View style={[styles.container, isFlat && styles.flatContainer]}>
          <Text style={[styles.text, isFlat && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary400,
    borderRadius: 4,
    padding: 8,
  },
  flatContainer: {
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  onPress: {
    opacity: 0.5,
  },
});
