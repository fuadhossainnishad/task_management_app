import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import UserListScreen from '../screens/user/userList.screen';
import AddNewMailScreen from '../screens/settings/addNewMail.screen';
import AddNewUserScreen from '../screens/user/addNewUser.screen';

export type UsersStackParamList = {
  Users: undefined;
  AddNewUser: undefined;

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

export default function UsersManagementNavigator() {
  const Stack = createNativeStackNavigator<UsersStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={UserListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddNewUser"
        component={AddNewUserScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
