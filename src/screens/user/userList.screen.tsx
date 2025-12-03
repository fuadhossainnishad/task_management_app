import { View, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { listData } from "./data";
import UserModal from "../../components/user/user.component";
import SearchIcon from '../../assets/icons/search.svg';
import { useState } from 'react';
import FilterIcon from '../../assets/icons/filter.svg'
import AppHeader from '../../components/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UsersStackParamList } from '../../navigation/UsersNavigator copy';

type Props = NativeStackNavigationProp<UsersStackParamList, 'Users'>

export default function UserListScreen() {
    const navigation = useNavigation<Props>()
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View className="flex-1 ">
            <AppHeader title='User Management' onBack={() => { navigation.goBack() }} />
            <View className="px-6  flex-row items-center gap-5">
                <View className="flex-1 flex-row items-center bg-white rounded-lg px-4 py-2">
                    <SearchIcon height={16} width={16} className="" />

                    <TextInput
                        className="ml-2 text-base"
                        placeholder="Search here..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <TouchableOpacity
                    // onPress={showPicker}
                    className="bg-white p-3 rounded-lg"
                >
                    <FilterIcon height={20} width={20} className="" />
                    {/* {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChange}
                        />
                    )} */}
                </TouchableOpacity>
            </View>
            <ScrollView
                className=''
            >
                {listData.map((item, ind) => (
                    <UserModal data={item} key={ind} />
                ))}
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate('AddNewUser')}
                className=" bg-[#B09050] px-6 py-4 rounded-full shadow-lg my-auto"
            >
                <Text className="text-black text-center font-normal text-lg">
                    Add New User
                </Text>
            </TouchableOpacity>
        </View>
    )
}