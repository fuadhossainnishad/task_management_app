import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobListScreen from '../screens/job/jobList.screen';
import CreateJobScreen from '../screens/job/createJob.screen';



export type JobStackParamList = {
    JobList: undefined
    CreateJob: undefined;
};

export default function JobManagementNavigator() {
    const Stack = createNativeStackNavigator<JobStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="JobList"
                component={JobListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateJob"
                component={CreateJobScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
