import { View, StyleSheet } from 'react-native'
import Text from './text'
import { JobCategory } from '@/types';
import { Link } from 'expo-router';

const JobCategoryCard = ({ bgColor, borderColor, fgColor, iconBgColor, mutedColor, Icon, slug }: JobCategory) => {
  return (
    <Link href={`/job-category/${slug}`} style={[styles.container, { backgroundColor: bgColor, borderColor: borderColor }]}>
      <View style={styles.innerContainer}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          <Icon size={24} color={fgColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: fgColor }]} fontWeight='500'>Remote & Freelance Jobs</Text>
          <Text style={[styles.description, { color: mutedColor }]}>

            Best for Persons with Disabilities, Senior Citizens, and Youth with limited mobility
          </Text>
        </View>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 10,
  },
});

export default JobCategoryCard
