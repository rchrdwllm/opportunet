import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import SuggestedJobs from '@/components/suggested'

const FYPScreen = () => {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <SuggestedJobs />
    </ScrollView>
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
