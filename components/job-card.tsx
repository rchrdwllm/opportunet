import { JobListing } from '@/types'
import { View, StyleSheet, Pressable } from 'react-native'
import { Image } from 'expo-image'
import Text from './text'
import { colors } from '@/constants/colors'
import { Link } from 'expo-router'
import { Hand } from 'lucide-react-native'
import { jobCategories } from '@/constants/job-categories'

const JobCard = ({ category, id, title, image, postedBy, location, isApplied, description, company, datePosted }: JobListing) => {
  const jobCategory = jobCategories.find(cat => cat.category === category)!
  const color = jobCategory.color

  return (
    <Link href={`/job-listing/${id}`} style={{ width: '100%', display: "flex" }}>
      <View style={[styles.container, { backgroundColor: colors[color].bgColor, borderColor: colors[color].borderColor }]}>
        <View style={styles.header}>
          <Image
            source={{ uri: image }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text fontWeight='500' style={[styles.name, { color: colors[color].fgColor }]}>{postedBy}</Text>
            <Text variant='subheading' style={{ color: colors[color].mutedColor }}>{company} - {location}</Text>
            <Text variant="subheading" style={{ color: colors[color].mutedColor }}>{datePosted.toLocaleDateString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              }
            )} • Edited • 🌐</Text>
          </View>
          <Pressable>
            <Hand size={20} color={colors[color].fgColor} />
          </Pressable>
        </View>
        <Text fontWeight='500' style={[styles.jobTitle, { color: colors[color].fgColor }]}>{title}</Text>
        <Text variant='subheading' style={[styles.description, { color: colors[color].mutedColor }]}>
          {description}
        </Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // White background
    padding: 15,
    borderWidth: 1,
    borderRadius: 24,
    width: "100%"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    gap: 4
  },
  name: {
    fontSize: 16
  },
  icon: {
    fontSize: 24,
  },
  jobTitle: {
    fontSize: 18,
    marginBottom: 8,
    marginTop: 8
  },
  description: {
    fontSize: 14,
  },
  seeMore: {
    color: '#0077B5',
  },
});

export default JobCard
