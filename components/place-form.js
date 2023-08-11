import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "../constants/Colors";
import { Place } from "../models/place-model";
import CustomButton from "./custom-button";
import ImagePicker from "./image-picker";
import LocationPicker from "./location-picker";

export default function PlaceForm({ onCreateNewPlace }) {
  const [enteredTitle, setEnteredTitle] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  function onChangeTitleHandler(value) {
    setEnteredTitle(value);
  }

  function onSelectImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  function onPickLocationHandler(location) {
    setPickedLocation(location);
  }

  function onAddPlaceHandler() {
    const place = new Place(enteredTitle, selectedImage, pickedLocation);
    onCreateNewPlace(place);
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
      <ImagePicker onSelectImage={onSelectImageHandler} />
      <LocationPicker onPickLocation={onPickLocationHandler} />
      <CustomButton onPress={onAddPlaceHandler}>Add Place</CustomButton>
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
