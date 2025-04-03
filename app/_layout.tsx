import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import React from 'react';
import { useFonts as useGeistFonts, Geist_400Regular, Geist_500Medium, Geist_600SemiBold, Geist_700Bold } from '@expo-google-fonts/geist'
import { useFonts as useGeistMonoFonts, GeistMono_700Bold } from '@expo-google-fonts/geist-mono';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(auth)/index",
};

export default function RootLayout() {
  const [geistLoaded] = useGeistFonts({
    Geist_400Regular,
    Geist_500Medium,
    Geist_600SemiBold,
    Geist_700Bold,
  });
  const [geistMonoLoaded] = useGeistMonoFonts({
    GeistMono_700Bold,
  });

  useEffect(() => {
    if (geistLoaded && geistMonoLoaded) {
      SplashScreen.hideAsync();
    }
  }, [geistLoaded, geistMonoLoaded]);

  if (!geistLoaded || !geistMonoLoaded) {
    return null;
  }

  return (
    <>
      <Stack initialRouteName='(auth)' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(listings)" />
        <Stack.Screen name="job-category" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
