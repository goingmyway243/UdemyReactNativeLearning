import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import PlaceList from "../components/place-list";
import { dbFetchPlaces } from "../utils/database";

export default function AllPlacesScreen() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    dbFetchPlaces().then(
      (places) => setLoadedPlaces(places),
      (error) => console.log(error)
    );
  }, []);

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
