import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryItem({ title, color }) {
  return (
    <View style={[styles.container, styles.itemContainer]}>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View
          style={[
            styles.container,
            styles.innerContainer,
            { backgroundColor: color },
          ]}
        >
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
