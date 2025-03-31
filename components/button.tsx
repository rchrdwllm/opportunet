import { ReactNode } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native'

type ButtonProps = {
  onPress?: () => void;
  children: ReactNode;
  containerStyle?: object;
  textStyle?: object;
}

const Button = ({ onPress, children, containerStyle, textStyle }: ButtonProps) => {
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#181D27",
  },
  text: {
    color: "#EFF4FF",
    textAlign: "center"
  }
})

export default Button
