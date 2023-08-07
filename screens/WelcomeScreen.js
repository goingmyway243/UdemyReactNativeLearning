import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState();
  const context = useContext(AuthContext);
  const token = context.token;

  useEffect(() => {
    axios
      .get(
        "https://react-native-udemy-c0afa-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=" +
          token
      )
      .then(({ data }) => {
        setFetchedMessage(data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
