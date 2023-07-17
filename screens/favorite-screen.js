import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/meal-list";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/FavoriteContext";

export default function FavoriteScreen() {
  const favContext = useContext(FavoriteContext);

  const mealData = MEALS.filter((meal) => favContext.ids.includes(meal.id));

  if (mealData.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>There is no favorite to show</Text>
      </View>
    );
  }

  return <MealList mealData={mealData} />;
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
