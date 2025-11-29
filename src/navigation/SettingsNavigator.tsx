import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/settings/settings';

export type SettingsStackParamList = {
  Settings: undefined;
  // CreateSettings: undefined;
  // SettingsDetails: {
  //   Settings: {
  //     id: string;
  //     date: string;
  //     SettingsName: string;
  //     custName: string;
  //     phone: string;
  //     email: string;
  //     address: string;
  //     creator: string;
  //     status: string;
  //   };
  // };
};

export default function SettingsManagementNavigator() {
  const Stack = createNativeStackNavigator<SettingsStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="CreateSettings"
        component={CreateSettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsDetails"
        component={SettingsDetailsScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
