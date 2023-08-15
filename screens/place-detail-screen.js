import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../components/outline-button";
import { Colors } from "../constants/Colors";
import { dbFetchPlacesById } from "../utils/database";

export default function PlaceDetail({ navigation, route }) {
  const [selectedPlace, setSelectedPlace] = useState();

  const placeId = route.params.placeId;

  useEffect(() => {
    dbFetchPlacesById(placeId).then(
      (result) => {
        setSelectedPlace(result);
        navigation.setOptions({ title: selectedPlace.title });
      },
      (error) => console.log(error)
    );
  }, [placeId]);

  function onOpenMapHandler() {
    navigation.navigate("map", {
      initialLat: selectedPlace.location.lat,
      initialLgt: selectedPlace.location.lgt,
    });
  }

  if (!selectedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Fetching place...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{selectedPlace.address}</Text>
        </View>
        <OutlineButton icon={"map"} onPress={onOpenMapHandler}>
          View on map
        </OutlineButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  addressContainer: {
    padding: 24,
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
  },
});
