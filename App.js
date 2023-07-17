import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/categories-screen";
import OverviewScreen from "./screens/overview-screen";
import DetailScreen from "./screens/detail-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "./screens/favorite-screen";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContentProvider from "./store/context/FavoriteContext";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "saddlebrown" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "saddlebrown" },
        tabBarActiveTintColor: "burlywood",
        tabBarLabelPosition: "beside-icon",
      }}
      sceneContainerStyle={{
        backgroundColor: "rosybrown",
      }}
    >
      <BottomTab.Screen
        name="MealsCategory"
        component={CategoriesScreen}
        options={{
          headerTitle: "All Categories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="list" />
          ),
          tabBarLabel: "Categories",
        }}
      />
      <BottomTab.Screen
        name="MealsFavorite"
        component={FavoriteScreen}
        options={{
          headerTitle: "My Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="star" />
          ),
          tabBarLabel: "Favorites",
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <FavoriteContentProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "saddlebrown" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "rosybrown" },
            }}
          >
            <Stack.Screen
              name="Home"
              component={BottomTabNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={OverviewScreen} />
            <Stack.Screen name="MealsDetail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContentProvider>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
