import jobListings from "@/constants/job-listings";
import { StyleSheet, View } from "react-native";
import JobCard from "./job-card";
import Text from "./text";

const TopPosts = () => {
  return (
    <View style={styles.container}>
      <Text fontWeight="500">Top posts</Text>
      <View style={styles.jobList}>
        {jobListings.map((job) => {
          if (job.isFeatured) return <JobCard key={job.id} {...job} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginTop: 16,
  },
  jobList: {
    gap: 16,
    width: "100%",
  },
});

export default TopPosts;
