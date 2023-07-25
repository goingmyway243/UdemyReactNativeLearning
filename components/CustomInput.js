import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function CustomInput({ label, inputConfig }) {
  const inputStyle = [styles.textInput];

  if (inputConfig && inputConfig.multiline) {
    inputStyle.push({ minHeight: 100, textAlignVertical: "top" });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} multiline {...inputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  textInput: {
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 18,
  },
});
