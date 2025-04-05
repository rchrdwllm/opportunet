import UserProfile from "@/components/user-profile";
import React from "react";
import { StyleSheet, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <UserProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDFDFD",
  },
});

export default ProfileScreen;
