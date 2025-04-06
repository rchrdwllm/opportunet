import React, { useState } from 'react';
import Text from '@/components/text';
import { View, StyleSheet, TouchableOpacity, ScrollView, Pressable, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const JobListingScreen = () => {
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
          <FontAwesome name="arrow-left" size={24} marginTop={40} marginLeft={5} color="black" style={{ opacity: 0.5 }} />
        </Pressable>
      </View>
      <Text style={styles.title} fontWeight="700">Remote Data Entry Specialist</Text>
      <Text style={styles.salary}>₱20,000  to  ₱25,000</Text>
      <View style={styles.tagsContainer}>
        <View style={styles.tagYellow}>
          <Text style={styles.tagTextYellow}>Remote</Text>
        </View>
        <View style={styles.tagPink}>
          <Text style={styles.tagTextPink}>Makati City</Text>
        </View>
        <View style={styles.tagGreen}>
          <Text style={styles.tagTextGreen}>Full-Time</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle} fontWeight="500">Job Description</Text>
        <Text style={styles.cardText}>
          A Remote Data Entry Specialist is responsible for accurately inputting, updating, and maintaining digital records in databases or spreadsheets. This role requires excellent attention to detail, fast typing skills, and the ability to work independently.
        </Text>
      </View>
      <View style={styles.card}>
  <Text style={styles.cardTitle} fontWeight="500">Responsibilities</Text>
  <View style={styles.responsibility}>
    <Text style={styles.responsibilityNumber} fontWeight="500">1</Text>
    <Text style={styles.responsibilityText}>
      The primary responsibility of a Remote Data Entry Specialist is to enter, update, and manage data in spreadsheets, databases, or customer relationship management (CRM) systems. They must ensure that all data is accurately recorded and properly formatted while following company guidelines.
    </Text>
  </View>
  <View style={styles.responsibility}>
    <Text style={styles.responsibilityNumber} fontWeight="500">2</Text>
    <Text style={styles.responsibilityText}>
      They will also be involved in document processing for organizing and categorizing electronic files, ensuring that all documents are easily accessible and properly archived.
    </Text>
  </View>
  <View style={styles.responsibility}>
    <Text style={styles.responsibilityNumber} fontWeight="500">3</Text>
    <Text style={styles.responsibilityText}>
      They must ensure the accuracy and integrity of data by performing regular audits and quality checks.
    </Text>
  </View>
  <View style={styles.responsibility}>
    <Text style={styles.responsibilityNumber} fontWeight="500">4</Text>
    <Text style={styles.responsibilityText}>
      They will collaborate with other team members to resolve data discrepancies and improve data management processes.
    </Text>
  </View>
  <View style={styles.responsibility}>
    <Text style={styles.responsibilityNumber} fontWeight="500">5</Text>
    <Text style={styles.responsibilityText}>
      They will assist in the development and implementation of data entry procedures and guidelines.
    </Text>
  </View>
</View>
<TouchableOpacity style={styles.applyButton} onPress={handleApplyPress}>
        <Text style={styles.applyButtonText}>Apply now</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} onRequestClose={handleModalClose}>
        <View style={styles.modalContent}>
        <FontAwesome name="check-circle" size={120} marginBottom={15} marginLeft={5} color="green" style={{ opacity: 0.5 }} />
          <Text style={styles.modalTitle}>Application sent!</Text>
          <Text style={styles.modalDescription}>Estimated response time: 1 day</Text>
          <TouchableOpacity style={styles.modalButton} onPress={handleBackPress}>
            <Text style={styles.modalButtonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};



//DESIGN!!!

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
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#1F2937',
    padding: 18,
  },
  salary: {
    fontSize: 27,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 25,
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  tagYellow: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
    marginHorizontal: 4,
  },
  tagTextYellow: {
    color: '#D97706',
    fontSize: 14,
  },
  tagPink: {
    backgroundColor: '#FBCFE8', 
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
    marginHorizontal: 4,
  },
  tagTextPink: {
    color: '#DB2777', 
    fontSize: 14,
  },
  tagGreen: {
    backgroundColor: '#D1FAE5',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
    marginHorizontal: 4,
  },
  tagTextGreen: {
    color: '#065F46',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1F2937',
  },
  cardText: {
    fontSize: 17.5,
    color: '#6B7280',
  },
  responsibility: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    flexWrap: 'wrap', 
  },
  responsibilityNumber: {
    marginRight: 12,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#374151',
    margin: 10,
    paddingTop: 10
},
  responsibilityText: {
    flex: 1, 
    color: '#6B7280',
    fontSize: 17.5,
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
    fontWeight: 'bold',
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
