import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FYPScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FYPScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FDFDFD"
  },
})

export default FYPScreen
