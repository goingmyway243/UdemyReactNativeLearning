import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./meal-item";

export default function MealList({ mealData }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItem = {
      id: item.id,
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
