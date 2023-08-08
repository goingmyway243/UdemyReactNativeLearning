import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllPlacesScreen from "./screens/all-places-screen";
import AddPlaceScreen from "./screens/add-place-screen";
import IconButton from "./components/icon-button";
import { Colors } from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.primary800 },
          }}
        >
          <Stack.Screen
            name="all-places"
            component={AllPlacesScreen}
            options={({ navigation }) => {
              return {
                title: "Your favorite places",
                headerRight: ({ tintColor }) => (
                  <IconButton
                    icon="add"
                    size={24}
                    color={tintColor}
                    onPress={() => navigation.navigate("add-place")}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="add-place"
            component={AddPlaceScreen}
            options={{ title: "Add a new place" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
