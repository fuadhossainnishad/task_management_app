import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

export default function OnboardingScreen2() {
  return (
    <View
      // colors={['#2F2F2F', '#2E8B57']}
      className="flex-1 justify-between items-center bg-white w-full h-full"
    >
      {/* Heading & Description */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-lg font-bold text-center mb-8">
          Easily Manage Jobs Across Teams
        </Text>
        <Text className="text-gray-200 text-base font-normal text-center px-4">
          Set up jobs, assign crews, and keep everything organized from the
          start.
        </Text>
      </View>

      {/* Image */}
      <Image
        source={require('../assets/images/onboard.png')}
        className="w-80 h-80 "
        resizeMode="contain"
      />

      {/* Buttons */}
      <View className="flex-row justify-between w-full px-4 mb-4">
        <TouchableOpacity onPress={() => console.log('Skip pressed')}>
          <Text className="text-gray-200 text-lg">Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('Next pressed')}
          className="bg-primary px-6 py-2 rounded-full"
        >
          <Text className="text-white font-semibold text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
