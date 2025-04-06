import React, { useState } from 'react';
import Text from '@/components/text';
import { View, StyleSheet, ScrollView, Pressable, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import jobListings from '@/constants/job-listings';
import Button from '@/components/button';
import { ArrowLeft } from 'lucide-react-native';

const JobListingScreen = () => {
  const { id } = useLocalSearchParams();
  const job = jobListings.find((job) => job.id === id)!
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleApplyPress = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress}>
          <ArrowLeft size={24} color="black" style={{ marginTop: 40 }} />
        </Pressable>
      </View>
      <Text style={styles.title} fontWeight="700">{job.title}</Text>
      <Text isMono style={styles.salary}>₱{job.minSalary.toLocaleString()} to ₱{job.maxSalary.toLocaleString()}</Text>
      <View style={styles.tagsContainer}>
        <View style={styles.tagYellow}>
          <Text style={styles.tagTextYellow}>{job.remote ? "Remote" : "Onsite"}</Text>
        </View>
        <View style={styles.tagPink}>
          <Text style={styles.tagTextPink}>{job.location}</Text>
        </View>
        <View style={styles.tagGreen}>
          <Text style={styles.tagTextGreen}>{job.employmentType}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle} fontWeight="500">Job Description</Text>
        <Text variant='subheading'>
          {job.description}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle} fontWeight="500">Responsibilities</Text>
        {job.responsibilities.map((responsibility, index) => (
          <View style={styles.responsibility}>
            <View style={styles.responsibilityNumberContainer}>
              <Text style={styles.responsibilityNumber} isMono>{index + 1}</Text>
            </View>
            <Text variant='subheading' style={{ flex: 1 }}>
              {responsibility}
            </Text>
          </View>
        ))}
        <Button containerStyle={{ marginTop: 16 }} onPress={handleApplyPress}>Apply now</Button>
      </View>
      <Modal visible={isModalVisible} onRequestClose={handleModalClose}>
        <View style={styles.modalContent}>
          <FontAwesome name="check-circle" size={120} marginBottom={15} marginLeft={5} color="green" style={{ opacity: 0.5 }} />
          <Text fontWeight='700' style={styles.modalTitle}>Application sent!</Text>
          <Text variant='subheading' style={styles.modalDescription}>Estimated response time: 1 day</Text>
          <Button onPress={handleModalClose}>Go back</Button>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#1F2937',
    padding: 18,
  },
  salary: {
    fontSize: 27,
    color: '#7F7F7F',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: "GeistMono_700Bold",
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  tagYellow: {
    backgroundColor: '#FFF6ED',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#F0E1D5',
  },
  tagTextYellow: {
    color: '#652501',
    fontSize: 14,
  },
  tagPink: {
    backgroundColor: '#FDF2FA',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#F1DBE9',
  },
  tagTextPink: {
    color: '#80094B',
    fontSize: 14,
  },
  tagGreen: {
    backgroundColor: '#ECFDF3',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#D4ECE0',
  },
  tagTextGreen: {
    color: '#005532',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 20,
    borderRadius: 24,
    marginBottom: 16,
  },
  cardTitle: {
    marginBottom: 16
  },
  responsibility: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  responsibilityNumberContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 9999,
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  responsibilityNumber: {
    fontSize: 24,
    lineHeight: 32
  },
  responsibilityText: {
    flex: 1,
    color: '#6B7280',
    lineHeight: 20,
    marginTop: 12,
  },
  applyButton: {
    backgroundColor: '#1F2937',
    paddingVertical: 17,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 30
  },
  applyButtonText: {
    color: 'white',
    fontSize: 25,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 300
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#D3D3D0',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  modalButtonText: {
    color: 'gray',
    fontSize: 16,
  },
});

export default JobListingScreen;
