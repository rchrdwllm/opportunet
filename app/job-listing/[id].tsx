import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const JobListingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>JobListingScreen</Text>
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
