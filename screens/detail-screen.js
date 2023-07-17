import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import DetailItem from "../components/detail-item";
import List from "../components/detail-screen/list";
import Subtitle from "../components/detail-screen/subtitle";
import IconButton from "../components/icon-button";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/FavoriteContext";

export default function DetailScreen({ route, navigation }) {
  const { mealId } = route.params;

  const favContext = useContext(FavoriteContext);

  const mealItem = MEALS.find((meal) => meal.id === mealId);

  const isFavMeal = favContext.ids.includes(mealId);

  function onFavoritePressHandler() {
    if (isFavMeal) {
      favContext.removeFavorite(mealId);
    } else {
      favContext.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name={isFavMeal ? "star" : "star-outline"}
          color="white"
          onPress={onFavoritePressHandler}
        />
      ),
    });
  }, [navigation, onFavoritePressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{mealItem.title}</Text>
        <DetailItem
          duration={mealItem.duration}
          complexity={mealItem.complexity}
          affordability={mealItem.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.subtitleContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={mealItem.ingredients} />
        </View>
        <View style={styles.subtitleContainer}>
          <Subtitle>Steps</Subtitle>
          <List data={mealItem.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  contentContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitleContainer: {
    width: "80%",
  },
});
