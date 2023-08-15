import PlaceForm from "../components/place-form";
import { dbInsertPlace } from "../utils/database";

export default function AddPlaceScreen({ navigation }) {
  async function onCreateNewPlaceHandler(place) {
    await dbInsertPlace(place);
    navigation.navigate("all-places");
  }

  return <PlaceForm onCreateNewPlace={onCreateNewPlaceHandler} />;
}
