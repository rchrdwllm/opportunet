import { View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import logo from '../../assets/images/logo.png';
import Input from "@/components/input";
import { useState } from "react";
import Button from "@/components/button";
import { Link } from "expo-router";
import Text from "@/components/text";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image contentFit="contain" source={logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        <Input value={email} onChangeText={setEmail} placeholder="Email" />
        <Input value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/(app)" asChild>
          <Button>Login</Button>
        </Link>
        <Link href="/register" asChild>
          <Pressable style={styles.registerBtn}>
            <Text style={styles.newUserText}>New user? <Text style={styles.registerText}>Register</Text></Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FDFDFD",
    padding: 20
  },
  logo: {
    width: "90%",
    height: 110,
  },
  inputContainer: {
    width: "100%",
    gap: 16
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  registerBtn: {
    marginTop: 16
  },
  newUserText: {
    textAlign: "center",
    color: "#A0A0A0",
  },
  registerText: {
    color: "#181D27",
    fontWeight: "700",
  }
});
