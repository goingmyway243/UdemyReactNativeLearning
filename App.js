import { Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED!");
        console.log(notification);
        console.log(notification.request.content.data.userName);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("NOTIFICATION RECEIVED!");
        console.log(response);
        console.log(response.notification.request.content.data.userName);
      }
    );

    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, []);

  function onScheduleNotificationsHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first notification",
        body: "This is the message from your local application!",
        data: { userName: "Indonesia John" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Schedule notifications"
        onPress={onScheduleNotificationsHandler}
      />
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
