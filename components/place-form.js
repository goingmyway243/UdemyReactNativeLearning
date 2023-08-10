import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "../constants/Colors";
import ImagePicker from "./image-picker";
import LocationPicker from "./location-picker";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState();

  function onChangeTitleHandler(value) {
    setEnteredTitle(value);
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary500,
  },
  input: {
    backgroundColor: Colors.primary200,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    color: Colors.primary800,
  },
});
