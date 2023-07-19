import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ManageExpenseScreen from "./screens/manage-expense-screen";
import AllExpensesScreen from "./screens/all-expenses-screen";
import RecentExpensesScreen from "./screens/recent-expenses-screen";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function NestedBottomBarNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTab.Screen
        name="recent-expenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="all-expenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="overview-expenses"
            component={NestedBottomBarNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="manage-expense" component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
