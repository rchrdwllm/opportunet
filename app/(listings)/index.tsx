import JobCategoryCard from '@/components/job-category-card'
import Text from '@/components/text'
import { jobCategories } from '@/constants/job-categories'
import { View, StyleSheet, ScrollView } from 'react-native'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {jobCategories.map(category => (
          <JobCategoryCard key={category.id} {...category} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  contentContainer: {
    gap: 16,
    padding: 20
  }
})

export default HomeScreen
