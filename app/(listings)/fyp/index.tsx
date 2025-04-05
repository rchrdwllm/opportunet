import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import SuggestedJobs from '@/components/suggested'
import TopPosts from '@/components/top-posts'

const FYPScreen = () => {
  return (
    <ScrollView horizontal={false} style={styles.container}>
      <View style={styles.innerContainer}>
        <SuggestedJobs />
        <TopPosts />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: "#FDFDFD",
  },
  innerContainer: {
    padding: 20,
    paddingBottom: 48
  }
})

export default FYPScreen
