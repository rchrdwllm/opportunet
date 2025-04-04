import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import SuggestedJobs from '@/components/suggested'
import TopPicks from '@/components/top-picks'

const FYPScreen = () => {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <SuggestedJobs />
      <TopPicks />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 20,
    backgroundColor: "#FDFDFD"
  },
})

export default FYPScreen
