import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PunchListScreen from '../screens/punchlist/punchList.screen';

export type PunchStackParamList = {
  PunchList: undefined;
  CreatePunchlist: undefined;
  PunchlistDetails: {
    punchlist: {
      punchlistId: string;
      jobName:string
      date: string;
      phone: string;
      punchlistCreator: string;
      pending: number;
      completed: number;
      totalItem: number;
    };
  };
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
        component={PunchListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PunchlistDetails"
        component={PunchListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
