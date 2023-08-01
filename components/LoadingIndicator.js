import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
