import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllPlacesScreen from "./screens/all-places-screen";
import AddPlaceScreen from "./screens/add-place-screen";
import IconButton from "./components/icon-button";
import { Colors } from "./constants/Colors";
import MapScreen from "./screens/map-screen";
import { useEffect, useState } from "react";
import { dbInit } from "./utils/database";
import AppLoading from "expo-app-loading";
import PlaceDetailScreen from "./screens/place-detail-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dbInit().then(
      (success) => {
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }

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
          <Stack.Screen
            name="place-detail"
            component={PlaceDetailScreen}
            options={{ title: "Loading place..." }}
          />
          <Stack.Screen
            name="map"
            component={MapScreen}
            options={{ title: "Map" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
