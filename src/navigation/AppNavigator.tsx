import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../features/onboarding/screens/onboarding.screen';
import OnboardingScreen2 from '../features/onboarding//screens/onboarding2.screen';
import OnboardingScreen3 from '../features/onboarding/screens/onboarding3.screen';

import BottomTabs from './BottomNavigator';

export type RootStackParamList = {
  Onboarding: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  HomeTab: undefined
};

export default function AppNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={OnboardingScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding3"
          component={OnboardingScreen3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeTab"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
