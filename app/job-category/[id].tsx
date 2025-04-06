import { useLocalSearchParams } from 'expo-router'
import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Text from '@/components/text'
import jobListings from '@/constants/job-listings'
import { jobCategories } from '@/constants/job-categories'
import JobCard from '@/components/job-card'
import { useRouter } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'

const CategoryScreen = () => {
  const { id } = useLocalSearchParams()
  const category = jobCategories.find(category => category.id === id)!
  const jobs = jobListings.filter(job => job.category === category.category)
  const router = useRouter()

  const handleBackPress = () => {
    router.back()
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress}>
          <ArrowLeft size={24} color="black" style={{ marginTop: 40 }} />
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text variant='heading' fontWeight='700'>{category.name}</Text>
        <Text variant='subheading'>{category.description}</Text>
      </View>
      <View style={styles.innerContainer}>
        {jobs.map(job => (
          <JobCard key={job.id} {...job} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 20,
  },
  textContainer: {
    gap: 8
  },
  innerContainer: {
    gap: 16,
    paddingBottom: 48,
    marginTop: 16
  },
  header: {
    marginBottom: 16
  }
})

export default CategoryScreen
