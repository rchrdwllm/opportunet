import Header from "@/components/header";
import Text from "@/components/text";
import { StyleSheet, View } from "react-native";
import { MaterialTopTabs } from "@/components/top-tabs";

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <MaterialTopTabs screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabel: ({ children, focused }) => (
          <View style={styles.tabBarLabelContainer}>
            <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelFocused]}>{children}</Text>
          </View>
        ),
        tabBarActiveTintColor: "#181D27",
      }}>
        <MaterialTopTabs.Screen name="index" options={{ title: "By category" }} />
        <MaterialTopTabs.Screen name="fyp" options={{ title: "For you" }} />
      </MaterialTopTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  tabBarLabelContainer: {},
  tabBarLabel: {
    fontFamily: "Geist_500Medium",
    fontSize: 14,
    opacity: 0.5,
  },
  tabBarLabelFocused: {
    opacity: 1,
  },
  tabBarIcon: {
    display: "none",
  },
  tabBar: {
    elevation: 0,
    boxShadow: "none",
    shadowOpacity: 0,
    backgroundColor: "#F9F9F9",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0"
  },
  tabBarIndicator: {
    position: "absolute",
    bottom: 0,
    height: 4,
    backgroundColor: "#181D27",
    width: "100%",
  },
});
