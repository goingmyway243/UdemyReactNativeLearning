import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);

  function handleAddGoal(goalText) {
    setListGoals((current) => [
      ...current,
      { text: goalText, id: Math.random() },
    ]);
    handleCloseModal();
  }

  function handleDeleteGoal(id) {
    setListGoals((current) => current.filter((goal) => goal.id !== id));
  }

  function handleOpenModal() {
    setModalVisibility(true);
  }

  function handleCloseModal() {
    setModalVisibility(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#dc143c" onPress={handleOpenModal} />
      <GoalInput
        visible={isModalVisible}
        onAddGoal={handleAddGoal}
        onCancel={handleCloseModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listGoals}
          renderItem={(data) => (
            <GoalItem data={data.item} onDeleteGoal={handleDeleteGoal} />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#cd5c5c",
  },
  goalsContainer: {
    marginTop: 24,
  },
});
