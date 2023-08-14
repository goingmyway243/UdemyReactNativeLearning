import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function PlaceItem({ place, onSelect }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onSelect}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    margin: 8,
    overflow: "hidden",
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    flex: 1,
    height: 100,
    marginRight: 4,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary800,
  },
  address: {
    color: Colors.gray700,
  },
});
