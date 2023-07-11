import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DetailItem from "./detail-item";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("MealsDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPressHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <DetailItem
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 8,
    margin: 16,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  titleText: {
    margin: 8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
