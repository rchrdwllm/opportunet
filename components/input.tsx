import { View, TextInput, StyleSheet } from "react-native";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  containerStyle?: object;
  inputStyle?: object;
};

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  inputStyle,
}: InputProps) => {
  return (
    <View style={[style.container, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={[style.textInput, inputStyle]}
        placeholderTextColor="#A4A7AE"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#181D2710"
  },
  textInput: {
    fontFamily: "Geist_400Regular",
    color: "#181D27"
  }
})

export default Input;
