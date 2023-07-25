import { View } from "react-native";
import CustomInput from "./CustomInput";

export default function ExpenseForm() {
  return (
    <View>
      <CustomInput
        label={"Amount"}
        inputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: () => {},
        }}
      />
      <CustomInput
        label={"Date"}
        inputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <CustomInput
        label={"Description"}
        inputConfig={{
          multiline: true,
          onChangeText: () => {},
        }}
      />
    </View>
  );
}
