import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/meal-item";
import { MEALS } from "../data/dummy-data";

export default function OverviewScreen({ route }) {
  const { categoryId } = route.params;

  const mealData = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItem = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItem} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mealData}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
