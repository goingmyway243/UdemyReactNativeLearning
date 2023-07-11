import { Image, Text, View } from "react-native";
import DetailItem from "../components/detail-item";
import { MEALS } from "../data/dummy-data";

export default function DetailScreen({ route }) {
  const { mealId } = route.params;

  const mealItem = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: mealItem.imageUrl }} />
      <Text>{mealItem.title}</Text>
      <DetailItem
        duration={mealItem.duration}
        complexity={mealItem.complexity}
        affordability={mealItem.affordability}
      />
      <Text>Ingredients:</Text>
      {mealItem.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps:</Text>
      {mealItem.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}
