import { forwardRef, ReactNode } from "react";
import { StyleSheet, Pressable } from "react-native";
import Text from "./text";

type ButtonProps = {
  onPress?: () => void;
  children: ReactNode;
  containerStyle?: object;
  textStyle?: object;
};

const Button = forwardRef(
  ({ onPress, children, containerStyle, textStyle }: ButtonProps, ref) => {
    return (
      <Pressable
        ref={ref as any}
        style={[styles.container, containerStyle]}
        onPress={onPress}
      >
        <Text fontWeight="500" style={[styles.text, textStyle]}>
          {children}
        </Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#181D27",
  },
  text: {
    color: "#EFF4FF",
    textAlign: "center",
  },
});

export default Button;
