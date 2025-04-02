
import Header from '@/components/header';
import Text from '@/components/text';
import { Geist_500Medium } from '@expo-google-fonts/geist';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <Tabs screenOptions={{
        headerShown: false,
        tabBarPosition: "top",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarLabel: ({ children, focused }) => (
          <View style={styles.tabBarLabelContainer}>
            <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelFocused]}>{children}</Text>
            {/* <View style={[styles.tabBarIndicator]} /> */}
          </View>
        ),
        tabBarItemStyle: {
          paddingTop: 0
        }
      }}>
        <Tabs.Screen name='index' options={{
          title: "By category"
        }} />
        <Tabs.Screen name='fyp' options={{
          title: "For you"
        }} />
      </Tabs>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD"
  },
  tabBarLabelContainer: {
  },
  tabBarLabel: {
    fontFamily: "Geist_500Medium",
    fontSize: 14,
    opacity: 0.5
  },
  tabBarLabelFocused: {
    opacity: 1,

  },
  tabBarIcon: {
    display: "none"
  },
  tabBar: {
    elevation: 0,
    boxShadow: "none",
    shadowOpacity: 0,
    backgroundColor: "#F9F9F9",
    paddingTop: 16,
    height: 64
  },
  tabBarIndicator: {
    position: "absolute",
    bottom: 0,
    height: 4,
    backgroundColor: "#181D27",
    width: "100%"
  },
})
