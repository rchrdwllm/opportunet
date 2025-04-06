import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import Text from "./text";

const UserProfile = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleLogoutPress = () => {
    router.push("/(auth)");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Pressable onPress={handleBackPress}>
          <FontAwesome
            name="arrow-left"
            size={24}
            color="#181D27"
            style={{ opacity: 0.5 }}
          />
        </Pressable>
        <Text fontWeight="700" variant="heading" style={styles.headerTitle}>
          Profile
        </Text>
        <Pressable onPress={handleLogoutPress}>
          <Text fontWeight="500" style={styles.logoutButton}>
            Logout
          </Text>
        </Pressable>
      </View>

      {/* User Info Section */}
      <View style={styles.userInfoSection}>
        <Image
          source={{
            uri: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/481469665_4002787499999105_7088976398120491407_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHhxJUcBLYWZWPZvkLm32zeqReKteimfrOpF4q16KZ-s3oAmsLe843MmmdLL7W6UgburhJTDOZE5dcjz7li-Yri&_nc_ohc=SPSEsN9RepUQ7kNvwFW2wTZ&_nc_oc=Adnv22R2SVxhuwf2YlNYHXPgZF3X9hhcOhg2drd6YeF5gkRiMytp3NlzjiF4HGsxIO0&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=rC8QA6oa03khFIRZRuCG4w&oh=00_AYE89ZO8N7SvGplM7rgVq6c1CWgDDCaOd_Rq3ZPGbzB2Sg&oe=67F7411F",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Richard Angus</Text>
        <Text style={styles.userTitle}>Software Engineer</Text>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>300</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>180</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Content Sections */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.sectionContent}>
          Passionate software engineer with 5+ years of experience in mobile and
          web development.
        </Text>
      </View>
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Job Preferences</Text>
        <Text style={styles.sectionContent}>
          Looking for remote opportunities in React Native and full-stack
          development.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 20,
    paddingTop: 40,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    color: "#181D27",
  },
  logoutButton: {
    color: "#DB2777",
  },
  userInfoSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
  },
  userName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#181D27",
  },
  userTitle: {
    fontSize: 16,
    color: "#8B8D92",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181D27",
  },
  statLabel: {
    fontSize: 14,
    color: "#8B8D92",
  },
  contentSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181D27",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: "#181D27",
  },
});

export default UserProfile;
