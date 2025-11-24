import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../navigation/BottomNavigator';

import SwipIcon from "../../assets/icons/swipe.svg"
import JobsIcon from "../../assets/icons/job2.svg"

type HomeProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

export default function Home() {

    const navigation = useNavigation<HomeProp>()

    return (
        <View className='bg-[#F8EFE4]'
            style={styles.container}
        >
            <View className="flex-row items-center gap-3 px-6 py-2 mb-6 border-b border-b-[#D8D9E0] bg-white">
                <TouchableOpacity onPress={() => navigation.navigate('Account')} className="p-2">
                    <Image
                        source={require('../../assets/images/logo.png')}
                        className="w-16 h-16"
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Text className="flex-1 text-4xl font-bold text-black">
                    ClearSite
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Account')} className="p-2">
                    <SwipIcon height={24} width={24} />
                </TouchableOpacity>
            </View>
            <Dashboard />
            <Options />
            <Reports />
            <Receipt />

        </View>
    );
};

function Dashboard() {
    return (
        <View className='bg-white p-4 mx-4 rounded-xl'>
            <Text className='text-lg font-normal'>
                Active Jobs & Punchlist Overview
            </Text>
            <View className='p-2 bg-[#F8EFE4]'>
                <JobsIcon height={48} width={48} className='-m-2 self-end' />
            </View>
        </View>
    )
}

function Options() {
    return (
        <View>
            fhzjf
        </View>
    )
}

function Reports() {
    return (
        <View>
            fhzjf
        </View>
    )
}
function Receipt() {
    return (
        <View>
            fhzjf
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});