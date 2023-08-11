import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import OutlineButton from "./outline-button";
import {
  useForegroundPermissions,
  getCurrentPositionAsync,
  PermissionStatus,
} from "expo-location";
import { useEffect, useLayoutEffect, useState } from "react";
import { getAddress, getMapLocation } from "../utils/location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

export default function LocationPicker({ onPickLocation }) {
  const navigation = useNavigation();
  const route = useRoute();
  // const isFocused = useIsFocused();
  const [locationPermission, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();

  useLayoutEffect(() => {
    if (route.params) {
      const location = {
        lat: route.params.pickedLat,
        lgt: route.params.pickedLgt,
      };

      setPickedLocation(location);
    }
  }, [route]);

  useEffect(() => {
    async function fetchAddress() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lgt
        );
        onPickLocation({ ...pickedLocation, address: address });
      }
    }

    fetchAddress();
  }, [pickedLocation, onPickLocation]);

  async function verifyPermission() {
    if (
      locationPermission.status === PermissionStatus.UNDETERMINED ||
      locationPermission.status === PermissionStatus.DENIED
    ) {
      await requestPermission();
      return locationPermission.granted;
    }

    return true;
  }

  async function onPickLocationHandler() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();
    console.log(location);
    setPickedLocation({
      lat: location.coords.latitude,
      lgt: location.coords.longitude,
    });
  }

  function onOpenMapHandler() {
    navigation.navigate("map");
  }

  let mapPreView = <Text>No location picked yet!</Text>;

  if (pickedLocation) {
    mapPreView = (
      <Image
        style={styles.image}
        source={{ uri: getMapLocation(pickedLocation.lat, pickedLocation.lgt) }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{mapPreView}</View>
      <View style={styles.actions}>
        <OutlineButton icon={"location"} onPress={onPickLocationHandler}>
          Pick location
        </OutlineButton>
        <OutlineButton icon={"map"} onPress={onOpenMapHandler}>
          Open map
        </OutlineButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary200,
    borderRadius: 4,
    marginVertical: 8,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
