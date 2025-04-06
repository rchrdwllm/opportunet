import { View, StyleSheet, Pressable } from 'react-native';
import Text from '@/components/text';
import { useState } from 'react';
import Input from '@/components/input';
import { Link } from 'expo-router';
import Button from '@/components/button';

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text} fontWeight='600' variant='heading'>Create an account</Text>
        <Input value={firstName} onChangeText={setFirstName} placeholder="First Name" />
        <Input value={lastName} onChangeText={setLastName} placeholder="Last Name" />
        <Input value={email} onChangeText={setEmail} placeholder="Email" />
        <Input value={phone} onChangeText={setPhone} placeholder="Phone" />
        <Input value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
        <Input value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm Password" secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/(auth)/verify-email" asChild>
          <Button>Create account</Button>
        </Link>
        <Link href="/(auth)" asChild>
          <Pressable style={styles.registerBtn}>
            <Text style={styles.newUserText}>Already have an account? <Text fontWeight='600' style={styles.registerText}>Login</Text></Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: "left",
  },
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
  }
});
