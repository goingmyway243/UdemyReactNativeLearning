import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // style={(pressData) => pressData.pressed && styles.pressEffect}
        android_ripple={{ color: "#cd5c5c" }}
        onPress={props.onDeleteGoal.bind(this, props.data.id)}
      >
        <Text style={styles.goalText}>{props.data.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#cccccc",
    borderRadius: 8,
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
  pressEffect: {
    opacity: "#dddddd",
  },
});
