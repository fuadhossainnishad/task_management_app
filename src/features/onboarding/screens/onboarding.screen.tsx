import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-white text-black pt-10">
      <View className="px-4">
        <Text className="text-lg font-bold mb-2">
          Easily Manage Jobs Across Teams
        </Text>
        <Text className="text-base font-normal">
          Set up jobs, assign crews, and keep everything organized from the
          start.
        </Text>
      </View>
      <View className="w-full h-[400px] items-center justify-center mt-20">
        <Image
          source={require('../../../../assets/images/onboard.png')}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      {/* <LinearGradient
        colors={['#C09050', '#FFFFFF']}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        className="w-full h-[300px] justify-center"
      >
        <View className="flex-col items-end  px-8 text-black">
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')}>
            <Text className="text-lg font-semibold">SKIP</Text>
          </TouchableOpacity>

         <TouchableOpacity className="bg-blue-600 px-6 py-2 rounded-full">
            <Text className="font-semibold text-lg">Next</Text>
          </TouchableOpacity>
    </View>
      </LinearGradient > 
      */
      }

      <LinearGradient
        colors={['#C09050', '#F5F0E8']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="w-full pt-8 pb-12 px-6"
      >
        <View className="flex-row justify-between items-center">
          {/* Skip Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Onboarding2')}
            activeOpacity={0.7}
          >
            <Text className="text-lg font-semibold text-gray-700">
              SKIP
            </Text>
          </TouchableOpacity>

          {/* Next Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Onboarding2')}
            className="bg-[#C09050] px-8 py-3 rounded-full shadow-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-semibold text-lg">
              Next →
            </Text>
          </TouchableOpacity>
        </View>

        {/* Pagination Dots */}
        <View className="flex-row justify-center mt-8 space-x-2">
          <View className="w-2 h-2 rounded-full bg-[#C09050]" />
          <View className="w-2 h-2 rounded-full bg-gray-300" />
          <View className="w-2 h-2 rounded-full bg-gray-300" />
        </View>
      </LinearGradient>
    </View >
  );
}
