import { View, StyleSheet } from 'react-native'
import Text from '@/components/text'
import Input from './input'
import { useState } from 'react'
import { Search } from 'lucide-react-native'

const Header = () => {
  const [query, setQuery] = useState("")

  return (
    <View style={styles.container}>
      <Text variant="heading" fontWeight='700'>OpportuNet</Text>
      <Input Icon={Search} placeholder='Search' containerStyle={styles.input} value={query} onChangeText={setQuery} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
    paddingTop: 48,
    gap: 16
  },
  input: {
    backgroundColor: "#FDFDFD"
  }
})

export default Header
