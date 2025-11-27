import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SwipIcon from '../../assets/icons/swipe.svg';
import JobsIcon from '../../assets/icons/job2.svg';
import ItemsIcon from '../../assets/icons/item.svg';

import Jobs2Icon from '../../assets/icons/jobs.svg';

import ReportIcon from '../../assets/icons/report.svg';

import ReceiptIcon from '../../assets/icons/receipt.svg';

import PunchlistIcon from '../../assets/icons/punchlist.svg';

import PhotosIcon from '../../assets/icons/photos.svg';
import VideosIcon from '../../assets/icons/videos.svg';
import CopyIcon from '../../assets/icons/copy.svg';

import { HomeStackParamList } from '../../navigation/HomeNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = NativeStackNavigationProp<HomeStackParamList, 'Dashboard'>;

export default function Home() {
  const navigation = useNavigation<Props>();

  return (
    <View className="bg-[#F8EFE4]" style={styles.container}>
      <View className="flex-row items-center gap-3 px-6 py-2 mb-6 border-b border-b-[#D8D9E0] bg-white">
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          className="p-2"
        >
          <Image
            source={require('../../assets/images/logo.png')}
            className="w-16 h-16"
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text className="flex-1 text-4xl font-bold text-black">ClearSite</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SwitchCompany')}
          className="p-2"
        >
          <SwipIcon height={24} width={24} />
        </TouchableOpacity>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} className="">
        <Dashboard />
        <Options />
        <Reports />
        <Receipt />
      </ScrollView>
    </View>
  );
}

function Dashboard() {
  return (
    <View className=" bg-white mx-4 mt-2 p-4 gap-2 rounded-lg">
      <Text className="text-lg font-semibold ">
        Active Jobs & Punchlist Overview
      </Text>

      <View className="flex-row gap-4">
        <View className="bg-bg_primary flex-1 p-4 rounded-xl relative">
          <View className="absolute top-0 right-0">
            <JobsIcon width={40} height={40} />
          </View>
          <Text className="text-lg font-semibold mb-2">105</Text>
          <Text className="text-base font-semibold mb-2 text-[#62636C]">
            Total Jobs
          </Text>

          <View className="flex-row justify-between">
            <View className="">
              <Text className="font-semibold text-orange-600 self-center">
                6
              </Text>
              <Text className="text-sm text-gray-600">Pending</Text>
            </View>
            <View className=" mb-1">
              <Text className="font-semibold text-green-600 self-center">
                12
              </Text>
              <Text className="text-sm text-gray-600">Completed</Text>
            </View>
          </View>
        </View>

        <View className="bg-bg_primary flex-1 p-4 rounded-xl relative">
          <View className="absolute top-0 right-0">
            <ItemsIcon width={40} height={40} />
          </View>

          <Text className="text-lg font-semibold mb-2">105</Text>

          <Text className="text-base font-semibold mb-2 text-[#62636C]">
            Total Bullet Item
          </Text>

          <View className="flex-row justify-between">
            <View className="">
              <Text className="font-semibold text-orange-600 self-center">
                6
              </Text>
              <Text className="text-sm text-gray-600">Pending</Text>
            </View>
            <View className=" mb-1">
              <Text className="font-semibold text-green-600 self-center">
                12
              </Text>
              <Text className="text-sm text-gray-600">Completed</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Options() {
  const links = [
    { id: 1, title: 'Jobs', icon: <Jobs2Icon width={52} height={52} /> },
    {
      id: 2,
      title: 'Daily Reports',
      icon: <ReportIcon width={52} height={52} />,
    },
    {
      id: 3,
      title: 'Punchlist',
      icon: <PunchlistIcon width={52} height={52} />,
    },
    { id: 4, title: 'Receipt', icon: <ReceiptIcon width={52} height={52} /> },
  ];

  return (
    <View className="bg-white p-4 mx-4 mt-4 rounded-xl">
      <Text className="text-lg font-semibold mb-4">Quick Links</Text>

      <View className="" style={styles.quickLinks}>
        {links.map(item => (
          <TouchableOpacity
            key={item.id}
            className="items-center gap-2"
            onPress={() => {}}
          >
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
  const reports = [
    {
      id: '556865',
      date: '19 Aug 2025, 10:06 PM',
      job: 'Smith Residence – Kitchen Remodel',
      phone: '1 (555) 101-2345',
      materials: '20 Steel Rods, 2 Drill...',
      notes: 'Foundation inspection done, found cra...',
      creator: 'Emily Johnson',
      photos: 2,
      videos: 3,
    },
    {
      id: '556866',
      date: '19 Aug 2025, 10:06 PM',
      job: 'Smith Residence – Kitchen Remodel',
      phone: '1 (555) 101-2345',
      materials: '20 Steel Rods, 2 Drill...',
      notes: 'Foundation inspection done, found cra...',
      creator: 'Emily Johnson',
      photos: 2,
      videos: 3,
    },
    {
      id: '556867',
      date: '19 Aug 2025, 10:06 PM',
      job: 'Smith Residence – Kitchen Remodel',
      phone: '1 (555) 101-2345',
      materials: '20 Steel Rods, 2 Drill...',
      notes: 'Foundation inspection done, found cra...',
      creator: 'Emily Johnson',
      photos: 2,
      videos: 3,
    },
  ];

  return (
    <View className="m-4 mb-8">
      {/* HEADER */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-semibold">Recent Reports</Text>
        <TouchableOpacity>
          <Text className="text-blue-600 font-medium">See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {reports.map((item, index) => (
          <View key={index} className="bg-white p-4 rounded-xl mr-4 shadow-md ">
            <View className="flex-row justify-between ">
              <Text
                className="text-base text-gray-500 bg-bg_primary p-2 px-4 rounded-full"
                style={styles.reportDate}
              >
                {item.date}
              </Text>
              <CopyIcon width={26} height={26} />
            </View>

            <View className=" text-base  mt-3 flex-row items-center gap-1">
              <Text className="text-base text-gray-700 font-medium">
                Report ID:
              </Text>
              <Text className="text-base font-semibold">{item.id}</Text>
            </View>

            <View className=" text-base  mt-3 flex-row items-center gap-1">
              <Text className=" text-gray-700 font-medium">Job Name:</Text>
              <Text className="text-base font-semibold">{item.job}</Text>
            </View>

            <View className=" text-base  mt-3 flex-row items-center gap-1">
              <Text className=" text-gray-700 font-medium">Phone:</Text>
              <Text className="text-base font-semibold">{item.phone}</Text>
            </View>

            <View className=" text-base  mt-3 flex-row items-center gap-1">
              <Text className=" text-gray-700 font-medium">
                Material/Tools Needed:
              </Text>
              <Text className="font-semibold">{item.materials}</Text>
            </View>

            <View className=" text-base  mt-3 flex-row items-center gap-1">
              <Text className=" text-gray-700 font-medium">Notes:</Text>
              <Text className=" font-semibold">{item.notes}</Text>
            </View>

            <View className="text-base  mt-3 flex-row items-center gap-1">
              <Text className=" text-gray-700 font-medium">
                Report Creator:
              </Text>
              <Text className="font-semibold">{item.creator}</Text>
            </View>

            <View className="flex-row gap-4 mt-4">
              <View className="items-center flex-row gap-2">
                <PhotosIcon height={30} width={30} />
                <Text className="text-xl font-bold">{item.photos}</Text>
                <Text className="text-sm text-gray-500">Photos</Text>
              </View>

              <View className="items-center flex-row gap-2">
                <VideosIcon height={30} width={30} />
                <Text className="text-xl font-bold">{item.videos}</Text>
                <Text className="text-sm text-gray-500">Videos</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function Receipt() {
  const receipts = [
    {
      id: '000001',
      date: '19 Aug 2025, 10:06 PM',
      job: 'Smith Residence – Kitchen Remodel',
      phone: '1 (555) 101-2345',
      uploader: 'Emily Johnson',
      amount: '$125.75',
    },
    {
      id: '000001',
      date: '19 Aug 2025, 10:06 PM',
      job: 'Smith Residence – Kitchen Remodel',
      phone: '1 (555) 101-2345',
      uploader: 'Emily Johnson',
      amount: '$125.75',
    },
    {
      id: '000001',
      date: '19 Aug 2025, 10:06 PM',
      job: 'Smith Residence – Kitchen Remodel',
      phone: '1 (555) 101-2345',
      uploader: 'Emily Johnson',
      amount: '$125.75',
    },
  ];

  return (
    <View className="mt-4 mx-4 mb-8">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-semibold">Recent Receipts</Text>
        <TouchableOpacity>
          <Text className="text-blue-600 font-medium">See All</Text>
        </TouchableOpacity>
      </View>

      {/* CARDS */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {receipts.map((item, index) => (
          <View key={index} className="bg-white p-4 rounded-xl mr-4 shadow-md ">
            {/* DATE */}
            <View className="flex-row justify-between ">
              <Text className="text-base text-gray-500 bg-bg_primary p-2 px-4 rounded-full self-start">
                {item.date}
              </Text>
              <CopyIcon width={26} height={26} />
            </View>

            {/* RECEIPT ID */}
            <View className="flex-row items-center gap-1 mt-3">
              <Text className="text-base text-gray-700 font-medium">
                Receipt ID:
              </Text>
              <Text className="text-base font-semibold">{item.id}</Text>
            </View>

            {/* JOB NAME */}
            <View className="flex-row items-center gap-1 mt-3">
              <Text className="text-base text-gray-700 font-medium">
                Job Name:
              </Text>
              <Text className="text-base font-semibold">{item.job}</Text>
            </View>

            {/* PHONE */}
            <View className="flex-row items-center gap-1 mt-3">
              <Text className="text-base text-gray-700 font-medium">
                Phone:
              </Text>
              <Text className="text-base font-semibold">{item.phone}</Text>
            </View>

            {/* UPLOADED BY */}
            <View className="flex-row items-center gap-1 mt-3">
              <Text className="text-base text-gray-700 font-medium">
                Uploaded by:
              </Text>
              <Text className="text-base font-semibold">{item.uploader}</Text>
            </View>

            {/* AMOUNT */}
            <View className="flex-row items-center gap-2 mt-4 bg-green-50 p-3 rounded-lg">
              <Text className="text-base text-gray-700 font-medium">
                Amount:
              </Text>
              <Text className="text-xl font-bold text-green-700">
                {item.amount}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
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
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  reportDate: {
    alignSelf: 'flex-start',
  },
});
