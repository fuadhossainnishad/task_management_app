import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View className="flex-1 bg-white px-4 pt-10">
      {/* Heading & Description */}
      <View className="">
        <Text className="text-lg font-bold mb-2">
          Easily Manage Jobs Across Teams
        </Text>
        <Text className="text-base font-normal text-gray-700">
          Set up jobs, assign crews, and keep everything organized from the
          start.
        </Text>
      </View>

      {/* Image container with fixed height */}
      <View className="w-full h-[400px] items-center justify-center">
        <Image
          source={require('../assets/images/onboard.png')}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      {/* Buttons */}
      <View className="flex-row justify-between items-center mt-10 px-2">
        <TouchableOpacity onPress={() => console.log('Skip pressed')}>
          <Text className="text-lg ">Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('Next pressed')}
          className="bg-blue-600 px-6 py-2 rounded-full"
        >
          <Text className="font-semibold text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
