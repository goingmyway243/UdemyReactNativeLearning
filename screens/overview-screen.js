import { useLayoutEffect } from "react";
import MealList from "../components/meal-list";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function OverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const mealData = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const title = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: title,
    });
  }, [categoryId, navigation]);

  return <MealList mealData={mealData} />;
}
