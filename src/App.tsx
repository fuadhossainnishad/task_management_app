import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import OnboardingScreen from './screens/onboarding.screen';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider className="">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="bg-white flex-1">
        <AppContent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View className="">
      <OnboardingScreen />
    </View>
  );
}
