import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

export default function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(evt) =>
          evt.pressed
            ? [styles.buttonInnerContainer, styles.buttonEffect]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonEffect: {
    opacity: 0.75,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
