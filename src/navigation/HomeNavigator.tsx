import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/home/Home.screen';
import SwitchCompanyScreen from '../screens/home/SwitchCompany.screen';

export type HomeStackParamList = {
    Dashboard: undefined
    SwitchCompany: undefined;
};

export default function HomeNavigator() {
    const Stack = createNativeStackNavigator<HomeStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SwitchCompany"
                component={SwitchCompanyScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
