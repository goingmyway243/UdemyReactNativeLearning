import { Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../constants/Colors";
import OutlineButton from "./outline-button";

export default function ImagePicker({ onSelectImage }) {
  const [cameraPermission, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();

  async function verifyPermission() {
    if (
      cameraPermission.status === PermissionStatus.UNDETERMINED ||
      cameraPermission.status === PermissionStatus.DENIED
    ) {
      await requestPermission();
      return cameraPermission.granted;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image);
    onSelectImage(image.uri);
  }

  let imagePreview = <Text>No image taken yet!</Text>;

  if (pickedImage) {
    imagePreview = (
      <Image style={styles.image} source={{ uri: pickedImage.uri }} />
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlineButton icon={"camera"} onPress={takeImageHandler}>
        Take an image
      </OutlineButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary200,
    borderRadius: 4,
    marginBottom: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
