import { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import PlaceList from "../components/place-list";

export default function AllPlacesScreen({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useLayoutEffect(() => {
    if (route.params) {
      setLoadedPlaces((currentPlaces) => {
        if (!currentPlaces.includes(route.params.place)) {
          return [...currentPlaces, route.params.place];
        }
        return currentPlaces;
      });
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <PlaceList places={loadedPlaces} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
