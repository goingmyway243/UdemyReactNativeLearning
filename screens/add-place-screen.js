import PlaceForm from "../components/place-form";

export default function AddPlaceScreen({ navigation }) {
  function onCreateNewPlaceHandler(place) {
    navigation.navigate("all-places", { place: place });
  }

  return <PlaceForm onCreateNewPlace={onCreateNewPlaceHandler} />;
}
