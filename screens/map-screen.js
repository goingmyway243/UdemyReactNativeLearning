import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/icon-button";

export default function MapScreen({ navigation }) {
  const region = {
    latitude: 10.729,
    longitude: 106.643,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [pickedLocation, setPickedLocation] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <IconButton
            icon={"save"}
            color={tintColor}
            size={24}
            onPress={onSaveLocationHandler}
          />
        );
      },
    });
  }, [navigation, onSaveLocationHandler]);

  function onSelectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lgt = event.nativeEvent.coordinate.longitude;

    setPickedLocation({ lat: lat, lgt: lgt });
  }

  function onSaveLocationHandler() {
    if (!pickedLocation) {
      Alert.alert(
        "No location picked!",
        "You need to picked a location (by tap on the map) first!"
      );
      return;
    }

    navigation.navigate("add-place", {
      pickedLat: pickedLocation.lat,
      pickedLgt: pickedLocation.lgt,
    });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={onSelectLocationHandler}
    >
      {pickedLocation && (
        <Marker
          title="Picked location"
          coordinate={{
            latitude: pickedLocation.lat,
            longitude: pickedLocation.lgt,
          }}
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
