import JobCategoryCard from '@/components/job-category-card'
import Text from '@/components/text'
import { jobCategories } from '@/types'
import { View, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {
        jobCategories.map((category) => (
          <JobCategoryCard key={category.id} {...category} />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 20
  }
})

export default HomeScreen
