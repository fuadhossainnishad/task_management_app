import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PunchlistDetailsScreen from '../features/punchlist/screens/punchlistDetails.screen';
import CreatePunchlistScreen from '../features/punchlist/screens/createPunchlist.screen';
import PunchListScreen from '../features/punchlist/screens/punchList.screen';

export type PunchStackParamList = {
  PunchList: undefined;
  CreatePunchlist: undefined;
  PunchlistDetails: any
};

export default function PunchListNavigator() {
  const Stack = createNativeStackNavigator<PunchStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PunchList"
        component={PunchListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePunchlist"
        component={CreatePunchlistScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PunchlistDetails"
        component={PunchlistDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
