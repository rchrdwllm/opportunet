import { StyleSheet, View } from 'react-native'
import Text from './text'
import { suggestedJobs } from '@/constants/suggested-jobs'
import JobCard from './job-card'

const SuggestedJobs = () => {
  return (
    <View style={styles.container}>
      <Text fontWeight='500'>Suggested</Text>
      <View style={styles.jobList}>
        {suggestedJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  jobList: {
    gap: 16,
    width: "100%",
  }
})

export default SuggestedJobs
