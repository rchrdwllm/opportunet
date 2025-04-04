import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getJob } from '../lib/job-listings'

const JobListingScreen = () => {
  const { id } = useLocalSearchParams()
  const jobListing = getJob(id as string)

  return (
    <View>
      <Text>{jobListing.title}</Text>
    </View>
  )
}

export default JobListingScreen
