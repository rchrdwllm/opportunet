import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getJob } from '../lib/job-listings'

const JobListingScreen = () => {
  const { id } = useLocalSearchParams()
  const jobListing = getJob(id as string)

  return (
    <View style={styles.container}>
      <Text>{jobListing.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD"
  }
})

export default JobListingScreen
