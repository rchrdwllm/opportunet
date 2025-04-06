import { LucideIcon } from "lucide-react-native";
import { StyleSheet, TextInput, View } from "react-native";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  containerStyle?: object;
  inputStyle?: object;
  Icon?: LucideIcon;
};

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  inputStyle,
  Icon,
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {Icon && <Icon size={20} color="#A4A7AE" />}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={[styles.textInput, Icon && styles.textInputIcon, inputStyle]}
        placeholderTextColor="#A4A7AE"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#181D2710",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  textInput: {
    fontFamily: "Geist_400Regular",
    color: "#181D27",
  },
  textInputIcon: {
    paddingVertical: 10,
  },
});

export default Input;
