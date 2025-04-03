import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SuggestedJobs from '@/components/suggested'

const FYPScreen = () => {
  return (
    <View style={styles.container}>
      <SuggestedJobs />
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
