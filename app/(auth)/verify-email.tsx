import { View, StyleSheet } from 'react-native'
import Text from '@/components/text'
import Input from '@/components/input'
import { useState } from 'react'
import Button from '@/components/button'
import { Link } from 'expo-router'

const VerifyEmailScreen = () => {
  const [digit1, setDigit1] = useState('')
  const [digit2, setDigit2] = useState('')
  const [digit3, setDigit3] = useState('')
  const [digit4, setDigit4] = useState('')
  const [digit5, setDigit5] = useState('')
  const [digit6, setDigit6] = useState('')

  return (
    <View style={styles.container}>
      <Text fontWeight='700' variant='heading'>Verify Email Address</Text>
      <Text variant='subheading' style={styles.subheading}>Please check the code we sent to your email.</Text>
      <View style={styles.inputContainer}>
        <Input containerStyle={styles.containerStyle} inputStyle={styles.inputText} value={digit1} onChangeText={setDigit1} placeholder='0' />
        <Input containerStyle={styles.containerStyle} inputStyle={styles.inputText} value={digit2} onChangeText={setDigit2} placeholder='0' />
        <Input containerStyle={styles.containerStyle} inputStyle={styles.inputText} value={digit3} onChangeText={setDigit3} placeholder='0' />
        <Input containerStyle={styles.containerStyle} inputStyle={styles.inputText} value={digit4} onChangeText={setDigit4} placeholder='0' />
        <Input containerStyle={styles.containerStyle} inputStyle={styles.inputText} value={digit5} onChangeText={setDigit5} placeholder='0' />
        <Input containerStyle={styles.containerStyle} inputStyle={styles.inputText} value={digit6} onChangeText={setDigit6} placeholder='0' />
      </View>
      <Link href="/(app)" asChild>
        <Button containerStyle={styles.button}>Submit</Button>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
    padding: 20
  },
  subheading: {
    marginTop: 8
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    width: '100%',
  },
  containerStyle: {
    width: "auto",
    borderRadius: 18,
    padding: 0
  },
  inputText: {
    fontSize: 24,
    height: 72,
    fontFamily: "GeistMono_700Bold",
  },
  button: {
    marginTop: 48,
  }
})

export default VerifyEmailScreen
