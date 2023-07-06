import { Text, View } from "react-native";

export default function OverviewScreen({ route }) {
  const { categoryId } = route.params;

  return (
    <View>
      <Text>Overview screen worked ! - {categoryId}</Text>
    </View>
  );
}
