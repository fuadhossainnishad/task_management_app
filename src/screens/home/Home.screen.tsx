import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import SwipIcon from "../../assets/icons/swipe.svg"
import JobsIcon from "../../assets/icons/job2.svg"
import Jobs2Icon from "../../assets/icons/jobs.svg"

import ReportIcon from "../../assets/icons/report.svg"

import ReceiptIcon from "../../assets/icons/receipt.svg"

import PunchlistIcon from "../../assets/icons/punchlist.svg"

import { HomeStackParamList } from '../../navigation/HomeNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = NativeStackNavigationProp<HomeStackParamList, 'Dashboard'>

export default function Home() {

    const navigation = useNavigation<Props>()

    return (
        <View className='bg-[#F8EFE4]'
            style={styles.container}
        >
            <View className="flex-row items-center gap-3 px-6 py-2 mb-6 border-b border-b-[#D8D9E0] bg-white">
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} className="p-2">
                    <Image
                        source={require('../../assets/images/logo.png')}
                        className="w-16 h-16"
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Text className="flex-1 text-4xl font-bold text-black">
                    ClearSite
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SwitchCompany')} className="p-2">
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
            <Text className='text-lg font-semibold'>
                Active Jobs & Punchlist Overview
            </Text>
            <View className='p-2 bg-[#F8EFE4]'>
                <JobsIcon height={48} width={48} className='-m-2 self-end' />
            </View>
        </View>
    )
}

function Options() {
    const links = [
        { id: 1, title: "Jobs", icon: <Jobs2Icon width={52} height={52} /> },
        { id: 2, title: "Daily Reports", icon: <ReportIcon width={52} height={52} /> },
        { id: 3, title: "Punchlist", icon: <PunchlistIcon width={52} height={52} /> },
        { id: 4, title: "Receipt", icon: <ReceiptIcon width={52} height={52} /> },
    ];

    return (
        <View className="bg-white p-4 mx-4 mt-4 rounded-xl">
            <Text className="text-lg font-semibold mb-4">Quick Links</Text>

            <View className="" style={styles.quickLinks}>
                {links.map(item => (
                    <TouchableOpacity key={item.id} className="items-center gap-2" onPress={() => { }}>
                        {/* Icon box */}
                        {item.icon}

                        {/* Title */}
                        <Text className="text-sm font-medium text-gray-700 text-center ">
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
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
    iconImage: {
        width: 32,
        height: 32,
    },
    quickLinks: {
        justifyContent: "space-around",
        flexDirection: 'row'
    }
});