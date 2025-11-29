import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  BusinessSettingsArray,
  OthersSettingsArray,
} from '../../constants/settings.constant';
import ArrowIcon from '../../assets/icons/arrow.svg';
import LogoutIcon from '../../assets/icons/logout.svg';
import { SettingsStackParamList } from '../../navigation/SettingsNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackNavigationProp<SettingsStackParamList, 'Settings'>;

export default function SettingsScreen() {
  const navigation = useNavigation<Props>();
  return (
    <View>
      <View className="bg-white flex-row items-center px-6 py-4 mb-6 border-b border-b-[#D8D9E0]">
        <Text className="flex-1 text-center text-2xl font-medium text-black">
          Account & Settings
        </Text>

        <View className="w-8" />
      </View>

      <View className="">
        <Image src="" />
      </View>

      <View>
        <Text className="">Business Settings</Text>
        {BusinessSettingsArray.map((item, ind) => (
          <TouchableOpacity
            key={ind}
            className="flex-row justify-between items-center"
            onPress={() => {
              navigation.navigate(item.route as keyof SettingsStackParamList);
            }}
          >
            <View className="flex-row gap-3 items-center">
              {item.icon}
              <Text>{item.name}</Text>
            </View>
            <ArrowIcon width={12} height={12} />
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Text className="">Others</Text>
        {OthersSettingsArray.map((item, ind) => (
          <TouchableOpacity
            key={ind}
            className="flex-row justify-between items-center"
            onPress={() => {
              navigation.navigate(item.route as keyof SettingsStackParamList);
            }}
          >
            <View className="flex-row gap-3 items-center">
              {item.icon}
              <Text>{item.name}</Text>
            </View>
            <ArrowIcon width={12} height={12} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity className="flex-row gap-3 items-center">
        <LogoutIcon width={12} height={12} />
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
